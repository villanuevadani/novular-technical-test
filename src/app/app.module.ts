import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { appRoutes } from './appRoutes';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
