import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable()
export class TasksService {

    private tasksListObservable = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        const tasksList = [
            {name: 'Homework', created: new Date().toLocaleString(), isDone: false},
            {name: 'wash dishes', created: new Date().toLocaleString(), isDone: false},
            {name: 'have a beer', created: new Date().toLocaleString(), isDone: false},
            {name: 'Dont have a beer', created: new Date().toLocaleString(), end: new Date().toLocaleString(),  isDone: true},
            {name: 'have a snack', created: new Date().toLocaleString(), isDone: false}];
        this.tasksListObservable.next(tasksList);
    }

    add(task: Task) {
        const list = this.tasksListObservable.getValue();
        list.push(task);        
        this.tasksListObservable.next(list);
    }

    remove(task: Task) {
        const list = this.tasksListObservable.getValue().filter( e => e !== task);
        this.tasksListObservable.next(list);
    }

    markDone(task: Task) {
        task.end = new Date().toLocaleString();
        task.isDone = true;
        const list = this.tasksListObservable.getValue();
        this.tasksListObservable.next(list);
    }

    getTaskListObs(): Observable<Array<Task>> {
        return this.tasksListObservable.asObservable();
    }


}