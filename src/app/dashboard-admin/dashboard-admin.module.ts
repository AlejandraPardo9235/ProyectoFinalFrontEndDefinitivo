import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { HeaderAdminModule } from '../header-admin/header-admin.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    HeaderAdminModule,
    FooterModule
  ],
  exports:[
    DashboardAdminComponent
  ]
})
export class DashboardAdminModule { }
