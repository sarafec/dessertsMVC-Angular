import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeService } from './recipe.service';
import { AppRoutingModule, routingComponents } from './app.routing';
import { FractionPipe } from './fraction.pipe';
import { UnitPipe } from './unit.pipe';

 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FractionPipe,
    UnitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
