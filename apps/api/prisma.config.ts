import { defineConfig, env } from 'prisma/config';
import 'dotenv/config';  // <--- This loads the .env file

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});