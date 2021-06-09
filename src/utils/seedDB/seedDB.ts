import faker from 'faker/locale/ru';
import times from 'lodash/times';
import random from 'lodash/random';
import compact from 'lodash/compact';
import map from 'lodash/map';
import { AnnouncementModel, TagModel, UserModel } from 'Models';

const seedDB = async () => {
  const randomTagNameCreatingFunctionsArray = [
    faker.commerce.productAdjective,
    faker.commerce.productMaterial,
    faker.commerce.color,
    faker.commerce.department,
  ];

  TagModel.collection.drop();
  AnnouncementModel.collection.drop();
  UserModel.collection.drop();

  const TAGS_COUNT = 5_00;
  const ANNOUNCEMENT_COUNT = 5_000;
  const USER_COUNT = 4_000;

  const createUser = () => ({
    name: faker.name.firstName(),
  });

  const users = times(USER_COUNT, createUser);
  const userIds = map(await UserModel.insertMany(users), ({ id }) => id);

  const randomValueFromArray = (arr: any[]) => arr[random(0, arr.length - 1)];

  const createTag = () => ({
    name: randomValueFromArray(randomTagNameCreatingFunctionsArray)(),
  });

  const tags = times(TAGS_COUNT, createTag);

  tags.forEach(async (t) => {
    await TagModel.findOneAndUpdate(t, t, { upsert: true });
  });

  const tagsIds = compact(map(await TagModel.find({}), ({ id }) => id));

  const createAnnouncement = (userIds: any[], tagsIds: any[]) => () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    author: randomValueFromArray(userIds),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    price: faker.commerce.price(),
    photoUrls: times(random(0, 5), () => faker.image.image()),
    address: faker.address.streetAddress(),
    updatedAt: faker.date.past(),
    tags: times(random(0, 20), () => randomValueFromArray(tagsIds)),
  });

  const announcements = times(ANNOUNCEMENT_COUNT, createAnnouncement(userIds, tagsIds));
  await AnnouncementModel.insertMany(announcements);
};

export default seedDB;
