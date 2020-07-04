import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutFrameComponent } from './blueprint/main-layout-frame/main-layout-frame.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [{
    path     : '',
    component: MainLayoutFrameComponent,
    children : [
        {
            path     : '',
            component: HomeComponent
        },
        {
            path     : 'contact',
            component: ContactComponent
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
