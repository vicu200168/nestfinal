import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from '../entities/song.entity';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() song: Song) {
    return this.songsService.create(song);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(+id);
  }

  @Get('search')
  findByName(@Query('title') title: string) {
    return this.songsService.findByTitle(title);
  }

  @Get('search/artist')
  findByArtist(@Query('artist') artist: string) {
    return this.songsService.findByArtist(artist);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() song: Song) {
    return this.songsService.update(+id, song);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(+id);
  }
}
