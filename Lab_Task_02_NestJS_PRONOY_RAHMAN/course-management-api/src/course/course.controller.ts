import {BadRequestException,Body, Controller, Delete, Get, Param, Patch, Post, Put ,UploadedFile,UseInterceptors} from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';




@Controller('course')
export class CourseController {
    constructor(private readonly CourseService: CourseService) { }

    @Get()
    getAllCourses() {
        return this.CourseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.CourseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() dto:CreateCourseDto) {
        return this.CourseService.createCourse(dto);
    }

    @Put(':id')
    updateCourse(@Param('id') id: string  ,@Body() dto:UpdateCourseDto) {
        return this.CourseService.updateCourse(id,dto);
    }

    @Patch(':id')
    patchCourse(@Param('id') id: string, @Body() dto:UpdateCourseDto) {
        return this.CourseService.patchCourse(id,dto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.CourseService.deleteCourse(id);
    }

    @Post(':id/upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage:diskStorage({
                destination:'./src/uploads',
                filename:(req,file,cb)=>{
                    const safeName = file.originalname.replace(/\s+/g, '_');
                    cb(null, `${Date.now()}-${safeName}`);
                },
            }),
            fileFilter:(req,file,cb)=>{
                if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/i)){
                    return cb(
                        new BadRequestException(
                            'Only .jpg, .jpeg,.png and .pdf files r allowed',
                        ),
                        false,
                    );
                }
                cb(null, true);
            },
            limits:{fileSize: 2*1024*1024},
        }),
    )
    uploadCourseMaterial(
        @Param('id') id:string,
        @UploadedFile() file: Express.Multer.File,
    ){
        return this.CourseService.uploadCourseMaterial(id,file);
    }

}
