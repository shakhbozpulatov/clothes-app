import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/product/product.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './app.error-handling';
import { CategoryModule } from './module/category/category.module';
import { OrderModule } from './module/order/order.module';

@Module({
  imports: [ProductModule, CategoryModule, OrderModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
