import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ReportsComponent } from './reports/reports.component';
import { RequestComponent } from './request/request.component';
import { ActiveRequestComponent } from './active-request/active-request.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { ManuComponent } from './manu/manu.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { StatusWiseComponent } from './status-wise/status-wise.component';
import { UpcomingTaskComponent } from './upcoming-task/upcoming-task.component';
import { DueDatewiseComponent } from './due-datewise/due-datewise.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportsComponent,
    RequestComponent,
    ActiveRequestComponent,
    DashboardComponent,
    FooterComponent,
    ManuComponent,
    ServiceRequestComponent,
    StatusWiseComponent,
    UpcomingTaskComponent,
    DueDatewiseComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
