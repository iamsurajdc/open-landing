import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './features/features.component';
import { CardComponent } from './elements/card/card.component';
import { ButtonComponent } from './elements/button/button.component';
import { EligibilityCalculatorComponent } from './elements/eligibility-calculator/eligibility-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FeaturesComponent,
    CardComponent,
    ButtonComponent,
    EligibilityCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
