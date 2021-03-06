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
import { SliderComponent } from './slider/slider.component';
import { NouisliderModule } from 'ng2-nouislider';
import { MultisliderComponent } from './multislider/multislider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BooleanComponent } from './boolean/boolean.component';
import { OpenComponent } from './open/open.component';
import { ResultsComponent } from './results/results.component';
import { ColorSliderChangeDirective } from './color-slider-change.directive';
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    QuestionComponent,
    CheckboxComponent,
    RadioComponent,
    SliderComponent,
    MultisliderComponent,
    DropdownComponent,
    BooleanComponent,
    OpenComponent,
    ResultsComponent,
    ColorSliderChangeDirective,
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,
FormsModule, BrowserAnimationsModule,	NouisliderModule
, HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [QuizDataService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
