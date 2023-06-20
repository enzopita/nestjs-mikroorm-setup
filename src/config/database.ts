import type { Options } from '@mikro-orm/core';

import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

const logger = new Logger('MikroORM');

export const databaseConfig = registerAs('database', () => {
  return {
    type: 'postgresql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME,
    debug: process.env.NODE_ENV !== 'production',
    logger: logger.log.bind(logger),
    highlighter: new SqlHighlighter(),
    driverOptions: {
      connection: {
        ssl: process.env.DATABASE_SSL === 'true',
      },
    },
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    migrations: {
      path: 'dist/database/migrations',
      pathTs: 'src/database/migrations',
    },
    seeder: {
      path: 'dist/database/seeders',
      pathTs: 'src/database/seeders',
    },
  } as Options;
});
