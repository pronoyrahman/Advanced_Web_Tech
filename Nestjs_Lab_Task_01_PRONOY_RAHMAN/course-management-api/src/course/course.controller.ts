import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';



@Controller('course')
export class CourseController {
    constructor(private readonly CourseService: CourseService) { }

    @Get()
    getAllCourses(): string {
        return this.CourseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string): string {
        return this.CourseService.getCourseById(id);
    }

    @Post()
    createCourse(): string {
        return this.CourseService.createCourse();
    }

    @Put(':id')
    updateCourse(@Param('id') id: string): string {
        return this.CourseService.updateCourse(id);
    }

    @Patch(':id')
    patchCourse(@Param('id') id: string): string {
        return this.CourseService.patchCourse(id);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string): string {
        return this.CourseService.deleteCourse(id)
    }


}
