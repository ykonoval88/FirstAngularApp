import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations: [AppComponent], // Use declarations for non-standalone components
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent] // Use standalone components here
})
export class AppModule { }
