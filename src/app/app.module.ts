import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuizDataService } from './quiz-data.service';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule
  ],
  providers: [QuizDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
