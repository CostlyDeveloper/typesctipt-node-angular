import { DataInterface } from './data-interface';

export namespace DataClass {

    export class Response implements DataInterface.IResponse {
        Response: any;
        Message: DataInterface.IMessage;
    } // Response

    export class Request implements DataInterface.IRequest {
        Request: any;
    } // Request

    export class Message {
        Code: string        = null;
        Title: string       = '';
        Message: string     = '';
        Description: string = '';
    } // interface Message

} // namespace DataClass
