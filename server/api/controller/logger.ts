import * as express from 'express';


export class APILogger {
    
    logging(_Req: express.Request, _Res: express.Response, _Next: express.NextFunction): void {
        
        console.log('loging...');
        _Next();
    }
}
