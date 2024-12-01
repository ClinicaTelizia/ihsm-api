import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.RDS_HOSTNAME,
  port: parseInt(process.env.RDS_PORT, 10),
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  entities: ['dist/**/entities/*.entity{.js,.ts}'],
  synchronize: true,
  migrations: ['dist/migrations/*{.js,.ts}'],
});

export default AppDataSource;
