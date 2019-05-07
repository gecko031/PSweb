import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Task } from '../model/task.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  tasksDoneCollection: AngularFirestoreCollection<Task>;
  tasksDone: Observable<Task[]>;
  static consoleTask(task: Task) {
    console.log('id: ' + task.id);
    console.log('name: ' + task.name);
    console.log('created: ' + task.created);
    console.log('end: ' + task.end);
    console.log('isDone: ' + task.isDone);
  }

  constructor(private afs: AngularFirestore) {
  }
  setTasks() {
    this.tasksCollection = this.afs.collection<Task>(
      'tasks',
      ref => ref.where(
        'isDone',
        '==',
        false
      )
    );
    this.tasks = this.tasksCollection.snapshotChanges().pipe(
      map( changes => {
        return changes.map( a => {
          const data = a.payload.doc.data() as Task;
          data.id = a.payload.doc.id;
          console.log(this.tasks);
          return data;
        });
      })
    );
    // this.peekCollection(this.tasksCollection);
  }

  setTasksDone() {
    this.tasksDoneCollection = this.afs.collection<Task>(
      'tasks',
        ref => ref.where(
          'isDone',
          '==',
          true
        )
    );
    this.tasksDone = this.tasksDoneCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Task;
          data.id = a.payload.doc.id;
          // console.log(this.tasksDone);
          return data;
      });
    }));
    // this.peekCollection(this.tasksDoneCollection);
  }
  getTasks() {
    return this.tasks;
  }
  getTasksDone() {
    return this.tasksDone;
  }
  createTask(task: Task) {
    return this.afs.collection('tasks').add(task);
  }
  updateTask(task: Task) {
    TaskService.consoleTask(task);
    task.end = new Date().toLocaleString();
    task.isDone = true;
    this.afs.doc('tasks/' + task.id).update(task);
    TaskService.consoleTask(task);
  }
  deleteTask(task: Task) {
    this.afs.doc('tasks/' + task.id).delete();
  }
  // peek collection content method
  peekCollection(myCollection: AngularFirestoreCollection<Task>) {
    console.log('PEEK COLLECTION {');
    myCollection.snapshotChanges().subscribe( e => {
      e.forEach( elem => {
        console.log(elem.payload.doc.data());
      });
    });
  }
}
