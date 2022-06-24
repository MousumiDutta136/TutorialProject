import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EBooksComponent } from './components/e-books/e-books.component';
import { InterviewQAComponent } from './components/interview-qa/interview-qa.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MatCardModule } from '@angular/material/card';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { DocsComponent } from './components/docs/docs.component'; 
import { CommentsDirective } from './directives/comments.directive';
import { ItemComponent } from './components/item/item.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { DocContentComponent } from './components/doc-content/doc-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    EBooksComponent,
    InterviewQAComponent,
    QuizComponent,
    FeedbackComponent,
    NewsComponent,
    EventsComponent,
    DocsComponent,
    CommentsDirective,
    ItemComponent,
    SidePanelComponent,
    DocContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
