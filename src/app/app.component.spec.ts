import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { Angulartics2 } from 'angulartics2';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /**
   * Angulartics2 service stub
   */
  const angulartics2Stub = {
    developerMode: (developerMode: boolean) => {}
  }

  /**
   * HeaderComponent stub
   * 
   * @class StubHeaderComponent
   */
  @Component({
    selector: 'pla-header',
    template: ''
  })
  class StubHeaderComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        StubHeaderComponent
      ],
      providers: [
        {provide: Angulartics2, useValue: angulartics2Stub}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
