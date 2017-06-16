// Angular Core
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

// Third Party Libraries
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

// Modules

// Components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// Misc
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  declarations: [HomeComponent, HeaderComponent],
  exports: [
    // Modules
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    Angulartics2Module,

    // Components
    HeaderComponent,
    HomeComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
