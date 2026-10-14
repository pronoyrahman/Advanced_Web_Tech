import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

getAllCourses() : string{
    return "Get all courses - from servcie";
}

getCourseById(id: string) :string
{
    return `Get course with id : ${id} from service`
}

createCourse() : string
{
    return " Create course - from service";
}

updateCourse(id: string):string
{
    return ` update course ${id} -from service`
} 

patchCourse(id: string) :string{
    return `patch Course ${id} -from service`
} 

deleteCourse(id: string) :string
{
    return `Delete Course ${id} -from service`
} 


}
