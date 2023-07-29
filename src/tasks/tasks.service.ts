import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity'
import { v4 } from 'uuid'

@Injectable()
export class TasksService {
    private tasks: Task[]  = [
        {
        id:'1',
        title: 'first task',
        description: 'some tasks',
        status: TaskStatus.PENDING,
    },
];
    getAllTask() {
        return this.tasks;
    }
    createTask(title: String, description: String, ) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)

        return task
    }
    updateTask() {}
    deleteTask() {}
}
