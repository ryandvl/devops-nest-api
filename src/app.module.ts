import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'root',
      database: 'devops-db',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
