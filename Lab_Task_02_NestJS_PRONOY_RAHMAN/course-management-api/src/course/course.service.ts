import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { Express } from 'express';
import { Multer } from 'multer';
@Injectable()
export class CourseService {

getAllCourses(){
    return{
        message: "all courses fetched succesfully ",
        data: [],
    };
}

getCourseById(id: string)
{
   return{
    message:'Course fetched successfully',
    id,
   }
}

createCourse(dto: CreateCourseDto) 
{
    return {
        message: 'courrse created succesfully ',
        data:dto,
    };
}

updateCourse(id: string, dto: UpdateCourseDto) {
    return { message: 'Course updated successfully',
      id, data: dto,
    };
  }

patchCourse(id: string ,dto: UpdateCourseDto){
    return {
        message: " course updated succesfully",id,
        updateFields:Object.keys(dto)
    }
} 

deleteCourse(id: string) {
    return { message: "Course deleted successfully",  id };
} 


uploadCourseMaterial(id: string, file:Express.Multer.File){
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: `uploads/${file.filename}`,
    };
    
}

}
