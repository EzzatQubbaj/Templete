import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
// import { AppLayoutComponent } from "./layout/app.layout.component";
// import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { GuardAdminGuard } from './guards/guard-admin.guard';

const routes: Routes =
    [
        {
            path: '',
            component: AdminLayoutsComponent,
            canActivate:[GuardAdminGuard], 
            children: [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                { path: 'dashboard',loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },


            ]
        },
        {
            path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
        },




    ]


@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}
// {path:'admin',component:AdminLayoutComponent,
// children:[
//   {path:'',redirectTo:'dashboard',pathMatch:'full'},
//   {path:'dashboard',loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)},