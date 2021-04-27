import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SvgCheckPasswordComponent } from './svg-check-password/svg-check-password.component';
import { AppRoutingModule } from './app-routing.module';
import { SvgExitComponent } from './svg-exit/svg-exit.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { CircleBarComponent } from './circle-bar/circle-bar.component';
import { TableChartComponent } from './table-chart/table-chart.component';
import { TableChartSvgIconOpenComponent } from './table-chart-svg-icon-open/table-chart-svg-icon-open.component';
import { ItemsComponent } from './items/items.component';
import { WrapperItemComponent } from './wrapper-item/wrapper-item.component';
import { InnerItemComponent } from './inner-item/inner-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    SvgCheckPasswordComponent,
    SvgExitComponent,
    SiteLayoutComponent,
    CircleBarComponent,
    TableChartComponent,
    TableChartSvgIconOpenComponent,
    ItemsComponent,
    WrapperItemComponent,
    InnerItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
