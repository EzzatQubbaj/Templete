import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AppLayoutModule } from './layout/app.layout.module';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
// import { ProductService } from './demo/service/product.service';
// import { CountryService } from './demo/service/country.service';
// import { CustomerService } from './demo/service/customer.service';
// import { EventService } from './demo/service/event.service';
// import { IconService } from './demo/service/icon.service';
// import { NodeService } from './demo/service/node.service';
// import { PhotoService } from './demo/service/photo.service';
// import { LoginComponent } from './pages/login/login.component';
// import { PagesModule } from './demo/components/pages/pages.module';
// import { LayoutService } from './layout/service/app.layout.service';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { LayoutsModule } from './layouts/layouts.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { LoginModule } from './pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        AppComponent
        // AppComponent, NotfoundComponent, LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // AppLayoutModule,
        // PagesModule,
        LayoutsModule,
        DashboardModule,
        LoginModule
        // InputTextModule,
        // FormsModule,
        // PasswordModule
        
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
