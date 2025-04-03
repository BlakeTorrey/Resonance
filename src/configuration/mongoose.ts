import mongoose, { Mongoose, Schema } from 'mongoose';

// Sets important schema settings at default for all schemas
const defaultSchemaSettings = (schema: Schema): void => {
  const autoIndex = schema.get('autoIndex');
  const timestamps = schema.get('timestamps');
  const toJSON = schema.get('toJSON');
  const toObject = schema.get('toObject');

  schema.set('autoIndex', autoIndex !== null ? autoIndex : true);
  schema.set('timestamps', timestamps !== null ? timestamps : true);
  schema.set('toJSON', {
    virtuals: true,
    getters: true,
    ...toJSON,
  });
  schema.set('toObject', {
    virtuals: true,
    getters: true,
    ...toObject,
  });
};

// Creates a reusable mongoose instance with default plugins for all schemas
export const createMongoose = (): mongoose.Mongoose => {
  const mongooseInstance = new mongoose.Mongoose();

  mongooseInstance.connection.on('connected', (): void => {
    console.log('Mongo Connected');
  });

  mongooseInstance.connection.on('error', (error: Error): void => {
    console.error(error);

    throw error;
  });

  mongooseInstance.connection.on('disconnected', (): void => {
    console.log('Mongo Disconnected');
  });

  mongooseInstance.plugin(defaultSchemaSettings);

  return mongooseInstance;
};

//Uses our instantiated mongoose connection and uses it to connect to our mongo database
export const connectToMongo = async (mongooseInstance: Mongoose, connectionString: string): Promise<Mongoose> => {
  try {
    return mongooseInstance.connect(connectionString);
  } catch (error) {
    console.error(error);

    throw error;
  }
};
