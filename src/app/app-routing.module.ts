import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './components/docs/docs.component';

import { EBooksComponent } from './components/e-books/e-books.component';
import { EventsComponent } from './components/events/events.component';

import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewQAComponent } from './components/interview-qa/interview-qa.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';

import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'ebooks', component: EBooksComponent },
  { path: 'news', component: NewsComponent},
  { path: 'events', component: EventsComponent},
  { path: 'interviewqa', component: InterviewQAComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
