import { bootstrapApplication } from '@angular/platform-browser';

import { HeaderComponent } from './app/header/header.component';
import { UserComponent } from './app/user/user.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(HeaderComponent);
bootstrapApplication(UserComponent);
bootstrapApplication(AppComponent).catch((err) => console.error(err));
