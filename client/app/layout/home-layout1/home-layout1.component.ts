import { Component, OnInit } from '@angular/core';
import { ImageProcessorService } from '../../layers/user-view/image-processor.service';

@Component({
    selector   : 'app-home-layout1',
    templateUrl: './home-layout1.component.html',
    styleUrls  : ['./home-layout1.component.scss']
})
export class HomeLayout1Component implements OnInit {

    constructor(public imgRepo: ImageProcessorService) { }

    ngOnInit(): void {
    }

}
