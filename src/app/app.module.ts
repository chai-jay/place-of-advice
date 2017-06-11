// Library Modules
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
