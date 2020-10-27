import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NavComponent, View2Component, View1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'one' },
      {
        path: '',
        component: AppComponent,
        children: [
          { path: 'one', component: View1Component },
          { path: 'two', component: View2Component },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
