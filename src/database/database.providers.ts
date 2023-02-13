import { DataSource } from 'typeorm';
import { CreateCoursesTable1671101745618 } from '../migrations/1671101745618-CreateCoursesTable';
import { CreateTagsTable1671102524472 } from '../migrations/1671102524472-CreateTagsTable';
import { CreateCoursesTagsTable1671188903063 } from '../migrations/1671188903063-CreateCoursesTagsTable';
import { CreateCoursesIdToTagsTable1671314073257 } from '../migrations/1671314073257-CreateCoursesIdToTagsTable';
import { CreateTagsIdToCoursesTable1671315067132 } from '../migrations/1671315067132-CreateTagsIdToCoursesTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'nest_training',
        entities: [__dirname + '/../**/*.entity.js'],
        // never use in prod. (When changing one measly field it will reset the whole table)
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'nest_training',
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: [
    CreateCoursesTable1671101745618,
    CreateTagsTable1671102524472,
    CreateCoursesTagsTable1671188903063,
    CreateCoursesIdToTagsTable1671314073257,
    CreateTagsIdToCoursesTable1671315067132,
  ],
  synchronize: false,
});
