import dotenv from 'dotenv';

dotenv.config();

export const APP_NAME = process.env.APP_NAME;
export const APP_ENV = process.env.APP_ENV;
export const APP_KEY = process.env.APP_KEY;
export const APP_KEY_JWT = process.env.APP_KEY_JWT;
export const APP_DEBUG = process.env.APP_DEBUG;
export const APP_PORT = process.env.APP_PORT || 8000;
export const APP_URL = process.env.APP_URL;
export const APP_HOST = APP_URL + ':' + APP_PORT;
export const APP_PATH_FILE = process.env.APP_PATH_FILE;

export const TYPEORM_CONNECTION = process.env.TYPEORM_CONNECTION;
export const TYPEORM_HOST = process.env.TYPEORM_HOST;
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE;
export const TYPEORM_PORT = process.env.TYPEORM_PORT;
export const TYPEORM_SYNCHRONIZE = process.env.TYPEORM_SYNCHRONIZE;
export const TYPEORM_LOGGING = process.env.TYPEORM_LOGGING;
export const TYPEORM_LOGGER = process.env.TYPEORM_LOGGER;

export const TYPEORM_ENTITIES = process.env.TYPEORM_ENTITIES;
export const TYPEORM_ENTITIES_DIR = process.env.TYPEORM_ENTITIES_DIR;
export const TYPEORM_MIGRATIONS = process.env.TYPEORM_MIGRATIONS;
export const TYPEORM_MIGRATIONS_DIR = process.env.TYPEORM_MIGRATIONS_DIR;
