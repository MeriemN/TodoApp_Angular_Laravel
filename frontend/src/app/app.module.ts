import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TasksService } from './tasks/tasks.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService} from './message.Service';
import { TasksComponent } from './tasks/tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService,HttpErrorHandler,TasksService,TasksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
