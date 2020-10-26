import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, View1Component, View2Component, NavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        { path: 'one', component: View1Component },
        { path: 'two', component: View2Component },
        { path: '', redirectTo: 'one' },
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
