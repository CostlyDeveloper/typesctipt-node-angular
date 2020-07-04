import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageProcessorService {

    public ImageList: ImageInfo[] = [];

    constructor() {

        const path: string = '../../../assets/img/';
        this.ImageList.push(
            new ImageInfo(path, 'logo.png', 'LOGO', 'Thorina Logo'),
            new ImageInfo(path, 'blue_lr.jpg', 'BF_LR', 'Blue Flower living room'),
            new ImageInfo(path, 'kitchen.jpg', 'BF_K', 'Blue Flower kitchen'),
            new ImageInfo(path, 'red_lr.jpg', 'RS_LR', 'Red Sea living room')
        );
    }

    // getter za dohvat slike prema Enum-u
    public getImg(_EnumName: string): ImageInfo {
        return this.ImageList.find(img => img.EnumName === _EnumName) || new ImageInfo('', '', ''); // new ImageInfo je zaštita
    }
}

// klasa za generiranje liste slika u repozitoriju kako bi mogli održavati slike na jednom mjestu u aplikaciji
class ImageInfo {
    public ImgSrc: string;

    constructor(private Path: string, public FileName: string, public EnumName: string, public Title: string = '', public Description: string = '') {
        this.ImgSrc = Path + FileName;
    }
}
