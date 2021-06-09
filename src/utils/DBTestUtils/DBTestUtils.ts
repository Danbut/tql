import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server'

class DBTestUtils {
    private mongoServer = new MongoMemoryServer();

    connect = async () => {
        const uri = await this.mongoServer.getUri();
    
        const mongooseOpts = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
          };
        
          await mongoose.connect(uri, mongooseOpts);
    }

    disconnect = async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await this.mongoServer.stop();
    }
}

export default new DBTestUtils();

