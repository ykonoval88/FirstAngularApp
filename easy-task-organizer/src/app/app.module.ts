import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ], // Use declarations for non-standalone components
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule ] // Use standalone components here
})
export class AppModule { }
