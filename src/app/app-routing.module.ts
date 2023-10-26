import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './barraInicio/header/header.component';
import { CardsComponent } from './contenido/cards/cards.component';


const routes: Routes = [
  {
    path: 'header', component: HeaderComponent,
    children: [
      { path: 'cards', component: CardsComponent },
    ],
  },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
