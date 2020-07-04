import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutFrameComponent } from './main-layout-frame/main-layout-frame.component';
import { HeaderComponent } from './frame-components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MainLayoutFrameComponent,
        HeaderComponent
    ],
    imports     : [
        CommonModule,
        RouterModule
    ]
})
export class BlueprintModule {}
