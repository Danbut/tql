import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';

import seedDB from 'utils/seedDB/seedDB';
import config from 'Config';

const app = express();

app.use(json());

mongoose.connect(
  config.database.url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    useFindAndModify: false,
  },
  () => {
    
    // seedDB();
  },
);

app.listen(3000, () => {
  
});
