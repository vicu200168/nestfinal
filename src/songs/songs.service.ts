import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from '../entities/song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  create(song: Partial<Song>): Promise<Song> {
    const newSong = this.songsRepository.create(song);
    return this.songsRepository.save(newSong);
  }

  findAll(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  findOne(id: number): Promise<Song> {
    return this.songsRepository.findOneBy({ id });
  }

  findByTitle(title: string): Promise<Song[]> {
    return this.songsRepository.find({ where: { title } });
  }

  findByArtist(artist: string): Promise<Song[]> {
    return this.songsRepository.find({ where: { artist } });
  }

  async update(id: number, song: Partial<Song>): Promise<Song> {
    await this.songsRepository.update(id, song);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.songsRepository.delete(id);
  }
  
}
