import { Injectable } from '@nestjs/common';
import { Upload } from './interfaces/Upload';

@Injectable()
export class UploadService {
  upload: Upload[] = [
    {
      id: 1,
      name: 'file1',
      discovered: 'discovered1',
      description: 'description1',
    },
    {
      id: 2,
      name: 'file2',
      discovered: 'discovered2',
      description: 'description2',
    },
    {
      id: 3,
      name: 'file3',
      discovered: 'discovered3',
      description: 'description',
    },
  ];

  getFiles() {
    return this.upload;
  }

  getFile(id: number) {
    return this.upload.find((obj) => obj.id === id);
  }
}
