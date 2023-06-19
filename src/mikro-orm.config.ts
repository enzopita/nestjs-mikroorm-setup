import { ConfigModule } from '@nestjs/config';

import { databaseConfig } from './config/database';

ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

export default databaseConfig();
