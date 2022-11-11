import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatViewComponent } from './modules/chat/chat-view/chat-view.component';
import { RegisterChatterComponent } from './modules/chat/register-chatter/register-chatter.component';

const routes: Routes = [
  {
  path: "register",
  pathMatch: "full",
  component: RegisterChatterComponent
  },
  {
  path: "chat",
  pathMatch: "full",
  component: ChatViewComponent
  },
  {
  path: "",
  pathMatch: "full",
  redirectTo: "chat",
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
