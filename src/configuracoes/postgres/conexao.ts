import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const configuracaoPostgres: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.RDS_HOSTNAME,
  port: parseInt(process.env.RDS_PORT, 10),
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  synchronize: true,
  autoLoadEntities: true,
  migrations: ['dist/migrations/*{.js,.ts}'],
  migrationsRun: process.env.RUN_MIGRATION === 'true',
};

export default configuracaoPostgres;
