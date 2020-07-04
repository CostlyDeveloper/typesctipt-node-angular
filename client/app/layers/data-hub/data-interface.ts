export namespace DataInterface {

    export interface IRequest {
        Request: any;
    } // interface IRequest

    export interface IResponse {
        Response: any;
        Message: DataInterface.IMessage;
    } // interface IResponse

    export interface IMessage {
        Code: string;
        Title: string;
        Message: string;
        Description: string;
    } // interface IMessage

} // namespace DataInterface
