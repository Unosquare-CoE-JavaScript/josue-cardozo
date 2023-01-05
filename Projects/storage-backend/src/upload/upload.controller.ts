import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UploadFileDto } from './dto/upload-file.dto';
import { Upload } from './interfaces/Upload';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Get() //@Get('/test')
  getStorage(): Upload[] {
    return this.uploadService.getFiles();
  }

  @Get(':id')
  getFile(@Param('id') id): Upload {
    return this.uploadService.getFile(parseInt(id));
  }

  @Post()
  addFile(@Body() obj: UploadFileDto): string {
    console.log(obj.discovered);
    return 'Adding file';
  }

  @Put(':id')
  updateFile(@Body() obj: UploadFileDto, @Param('id') id: string): string {
    console.log(obj, id);
    return 'updating file';
  }

  @Delete(':id')
  deleteFile(@Param('id') id): string {
    console.log(id);
    return `delete file ${id}`;
  }
}
