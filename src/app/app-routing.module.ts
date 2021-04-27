import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CircleBarComponent } from './circle-bar/circle-bar.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { TableChartComponent } from './table-chart/table-chart.component';
import { SiteLayoutGuard } from './site-layout.guard';


const routes: Routes = [
    { path: 'login', component: AuthorizationComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'app', component: SiteLayoutComponent,canActivate: [SiteLayoutGuard],children: [
            { path: 'circle-bar-1', component: CircleBarComponent },
            { path: 'chart-table', component: TableChartComponent },
        ]
    },
    { path: '**', redirectTo: '/login' },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }