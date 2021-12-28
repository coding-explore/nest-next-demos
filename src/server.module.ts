import { Module } from '@nestjs/common';

import { AppModule } from './app.module';
import { ViewModule } from './view/view.module';

@Module({
  imports: [AppModule, ViewModule],
  providers: [],
})
export class ServerModule {}
