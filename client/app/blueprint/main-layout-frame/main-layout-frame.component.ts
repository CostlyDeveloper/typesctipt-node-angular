import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../../layers/user-view/animations/route-animations.animations';

@Component({
    selector   : 'app-main-layout-frame',
    templateUrl: './main-layout-frame.component.html',
    styleUrls  : ['./main-layout-frame.component.scss'],
    animations : [routerTransition]
})
export class MainLayoutFrameComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    public getRouterOutletState(outlet: RouterOutlet): any {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
