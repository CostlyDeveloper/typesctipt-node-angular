import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayout1Component } from './home-layout1/home-layout1.component';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [HomeLayout1Component, ContactLayoutComponent],
    exports: [
        HomeLayout1Component,
        ContactLayoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class LayoutModule {}
