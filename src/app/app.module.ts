import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TickDirective } from './shared/tick.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { TaskService } from './services/task.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    TickDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFirestore,
    TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
