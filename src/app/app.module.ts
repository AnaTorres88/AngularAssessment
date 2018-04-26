import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuizDataService } from './quiz-data.service';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    QuestionComponent,
    CheckboxComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,
FormsModule, BrowserAnimationsModule, HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [QuizDataService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
