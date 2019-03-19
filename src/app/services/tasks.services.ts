import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {
    private tasksList: Array<string> = [];
    private tasksDone: Array<string> = [];
    private tasksListObservable = new BehaviorSubject<Array<string>>([]);
    private tasksDoneObservable = new BehaviorSubject<Array<string>>([]);

    constructor() {
        this.tasksList = ['Homework', 'wash dishes', 'have a beer'];
        this.tasksListObservable.next(this.tasksList);
    }

    add(task: string) {
        this.tasksList.push(task);
        this.tasksListObservable.next(this.tasksList);
    }

    remove(task: string) {
        this.tasksList = this.tasksList.filter( e => e !== task);
        this.tasksListObservable.next(this.tasksList);
    }

    markDone(task: string) {
        this.tasksDone.push(task);
        this.remove(task);
        this.tasksDoneObservable.next(this.tasksDone);
    }

    getTaskListObs(): Observable<Array<string>> {
        return this.tasksListObservable.asObservable();
    }

    getTaskDoneObs(): Observable<Array<string>> {
        return this.tasksDoneObservable.asObservable();
    }
}