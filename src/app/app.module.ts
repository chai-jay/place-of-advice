// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CoreModule,
    AppRoutingModule // Keep this after Core and Feature Modules for correct routes ordering
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
