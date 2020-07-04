import { Injectable } from '@angular/core';
import { SimpleCrypt } from 'ngx-simple-crypt';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {
    simpleCrypt: SimpleCrypt = new SimpleCrypt();
    key: string              = 'Fish';

    constructor() {
        this.key = this.encode(this.key);
    }

    public encode(_Payload: any): any {
        return this.simpleCrypt.encode(this.key, JSON.stringify(_Payload));
    }

    public decode(_Payload: any): any {
        return JSON.parse(this.simpleCrypt.decode(this.key, _Payload));
    }

}
