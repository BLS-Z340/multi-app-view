import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'app1',
          loadChildren: () => import('apps/app1/src/app/app.module').then(m => m.AppModule),
        },
        {
          path: 'app2',
          loadChildren: () => import('apps/app2/src/app/app.module').then(m => m.AppModule),
        },
        { path: '*', redirectTo: '/app1/core' },
      ],
    ),
  ],
  exports: [RouterModule],
  bootstrap: [AppRoutingModule]
})
export class AppRoutingModule {}
