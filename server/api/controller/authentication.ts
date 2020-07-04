import * as express from 'express';


export class APIAuthentication {
    
    authenticating(_Req: express.Request, _Res: express.Response, _Next: express.NextFunction): void {
        
        console.log('authenticating...');
        _Next();
        
    }
}
