import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        CardComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ], // Use declarations for non-standalone components
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule] // Use standalone components here
})
export class AppModule { }
