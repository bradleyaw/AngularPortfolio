import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
//Angular Material Imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //Angular Material Imports
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
