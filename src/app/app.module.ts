import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './barraInicio/header/header.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CardsComponent } from './contenido/cards/cards.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,


 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(), 
    MatTabsModule
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
