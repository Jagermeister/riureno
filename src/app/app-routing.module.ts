import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: '../app/calendar/calendar.module#CalendarModule'
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
