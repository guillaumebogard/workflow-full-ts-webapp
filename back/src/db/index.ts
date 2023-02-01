import {
  Sequelize,
  SequelizeOptions
} from 'sequelize-typescript';

import config from '../config.js';

import User from './models/user.js';

const env = process.env.NODE_ENV || 'development';
const envConfig = config[env as keyof typeof config];

export const databaseConfig = new Sequelize(
  {
    ...envConfig,
    models: [
      User,
    ],
  } as SequelizeOptions
);

export default databaseConfig;
