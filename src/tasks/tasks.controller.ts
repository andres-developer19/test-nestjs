import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTask()
    }

    @Post()
    createTask() {
        /* this.tasksService.createTask() */
    }
}