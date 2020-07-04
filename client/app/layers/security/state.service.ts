import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    public webConfig: IConfig;

    constructor(private httpClient: HttpClient, private securityService: SecurityService) {
        let config = localStorage.getItem('Config');

        if (config) {
            this.webConfig = this.securityService.decode(config);
            config = null;
        } else {
            const sub = this.getLocal('./assets/web-config.json').subscribe((_Data: IConfig) => {
                this.webConfig = _Data;
                localStorage.setItem('Config', this.securityService.encode(this.webConfig));
                sub.unsubscribe();
            });
        }
    }

    private getLocal(_Url: string): Observable<any> {
        return this.httpClient.get<any>(_Url);
    }
}

export interface IConfig {

    UseSecurityProtocol: boolean;
    APISettings: {
        Address: string;
        Port: string;
    };
}
