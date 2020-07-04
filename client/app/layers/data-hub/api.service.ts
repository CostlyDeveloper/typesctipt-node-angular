import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInterface } from './data-interface';
import { StateService } from '../security/state.service';
import { DataClass } from './data-class';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient, private stateService: StateService) {
    }

    public postService(_RequestObject: any, _Uri: string): Observable<DataInterface.IResponse> {

        return this.httpClient.post<DataInterface.IResponse>(this.connectionBuilder() + _Uri, this.requestGenerator(_RequestObject));
    }

    public getService(_Uri: string): Observable<any> {

        return this.httpClient.get<any>(this.connectionBuilder() + _Uri);
    }

    private connectionBuilder(): string {
        let lassie = this.stateService.webConfig.UseSecurityProtocol === true ? 'https://' : 'http://';
        lassie += this.stateService.webConfig.APISettings.Address + ':' + this.stateService.webConfig.APISettings.Port;
        return lassie;
    }

    private requestGenerator(_RequestObject: any): DataInterface.IRequest {
        const request: DataInterface.IRequest = new DataClass.Request();
        if (!_RequestObject) {
            request.Request = null;
        } else {
            request.Request = _RequestObject;
        }
        return request;
    }
}


