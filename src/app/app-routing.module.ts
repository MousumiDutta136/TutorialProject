import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
import { EBooksComponent } from './components/e-books/e-books.component';

import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewQAComponent } from './components/interview-qa/interview-qa.component';
import { LoginComponent } from './components/login/login.component';
import { NewseventsComponent } from './components/newsevents/newsevents.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cheatsheet', component: CheatsheetComponent },
  { path: 'ebooks', component: EBooksComponent },
  { path: 'newsevents', component: NewseventsComponent },
  { path: 'interviewqa', component: InterviewQAComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
