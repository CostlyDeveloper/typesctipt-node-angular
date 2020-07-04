import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent
    ],
    imports     : [
        CommonModule,
        LayoutModule
    ]
})
export class PagesModule {}
