import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FeePortalComponent } from './fee-portal/fee-portal.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * Routes
 */
const routes: Routes = [
  {path: 'attendance' , component: AttendanceSheetComponent},
  {path: 'fee' , component: FeePortalComponent},
  { path: '',
    redirectTo: '/attendance',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeePortalComponent,
    AttendanceSheetComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
