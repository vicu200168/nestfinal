import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SongsModule } from './songs/songs.module';
import { User } from './entities/user.entity';
import { Song } from './entities/song.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.sqlite',
      entities: [User, Song],
      synchronize: true, // No usar en producción
    }),
    UsersModule,
    SongsModule,
  ],
})
export class AppModule {}
