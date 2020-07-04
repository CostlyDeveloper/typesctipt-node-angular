import { Messaging } from '../messaging/messaging';


export namespace LayerDataHub {
    
    export class Response {
        
        Response: any      = null;
        Message: Messaging = new Messaging();
        
        setResponse(_Response: any): void {
            this.Response = _Response;
        }
        
    } // class Response
    
} // namespace LayerDataHub
