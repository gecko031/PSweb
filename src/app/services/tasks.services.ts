import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable()
export class TasksService {
    private tasksList: Array<Task> = [];
    private tasksDone: Array<Task> = [];
    private tasksListObservable = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObservable = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        this.tasksList = [
            {name: 'Homework', created: new Date},
            {name: 'wash dishes', created: new Date},
            {name: 'have a beer', created: new Date}];
        this.tasksListObservable.next(this.tasksList);
    }

    add(task: Task) {
        this.tasksList.push(task);
        this.tasksListObservable.next(this.tasksList);
    }

    remove(task: Task) {
        this.tasksList = this.tasksList.filter( e => e !== task);
        this.tasksListObservable.next(this.tasksList);
    }

    markDone(task: Task) {
        this.tasksDone.push(task);
        this.remove(task);
        this.tasksDoneObservable.next(this.tasksDone);
    }

    getTaskListObs(): Observable<Array<Task>> {
        return this.tasksListObservable.asObservable();
    }

    getTaskDoneObs(): Observable<Array<Task>> {
        return this.tasksDoneObservable.asObservable();
    }
}