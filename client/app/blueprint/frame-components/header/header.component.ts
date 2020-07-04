import { Component, OnInit } from '@angular/core';
import { ImageProcessorService } from '../../../layers/user-view/image-processor.service';
import { menuAnimation } from '../../../layers/user-view/animations/menu-animation';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss'],
    animations : [menuAnimation]
})
export class HeaderComponent implements OnInit {

    mobMenuVisibility: string = 'hide';
    menuItems: MenuItem[]     = [];

    constructor(public imgRepo: ImageProcessorService) { }

    ngOnInit(): void {
        // Generator izbornika koristi klasu MenuItem
        this.menuItems.push(
            new MenuItem('Home', '/'),
            new MenuItem('Contact', '/contact')
        );

    }
}

export class MenuItem {
    constructor(public Title: string, public RouterLink: string) {}
}
