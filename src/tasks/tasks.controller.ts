import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTask()
    }

    @Post()
    createTask(@Body() newTask: any) {
        console.log(newTask)
        /* this.tasksService.createTask() */
        return 'guardando'
    }
}
