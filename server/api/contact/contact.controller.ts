import { INFORMATIONClass } from '../../../dependencies/models/INFORMATION/information.class';
import { LayerDataHub } from '../../../dependencies/layers/data-hub/data-hub';
import * as express from 'express';


export class ContactController {

    constructor() {}
    
    sendMail(_Req: express.Request, _Res: express.Response): any {
        const EmailModel      = new INFORMATIONClass.Email();
        const DataHubResponse = new LayerDataHub.Response();
    
        EmailModel.valueSetter(_Req.body.Request);
        // _Res.setHeader('Content-Type', 'application/json');
        
        
        if (!EmailModel.isValid()) {
            const errorList = [];
            if (EmailModel.getInvalidFields().includes('Email')) {
                errorList.push('Invalid Email.');
            }
            if (EmailModel.getInvalidFields().includes('Message')) {
                errorList.push('Invalid message, the message must be longer than 30 characters.');
            }

            DataHubResponse.Message.Title       = 'Error';
            DataHubResponse.Message.Description = errorList.join('\n');
            DataHubResponse.Message.Message     = 'Validation Error';
            DataHubResponse.Message.Code        = 422;
            _Res.status(DataHubResponse.Message.Code).json(DataHubResponse.Message);
        } else {
            DataHubResponse.setResponse(_Req.body.Request);
            DataHubResponse.Message.Title   = 'Success';
            DataHubResponse.Message.Message = 'Your message has been sent!';
            DataHubResponse.Message.Code    = 200;
            _Res.send(DataHubResponse);
        }

    }
}
