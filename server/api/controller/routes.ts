import * as express from 'express';
import { LayerDataHub } from '../../../dependencies/layers/data-hub/data-hub';


export class RouteController {
    
    // modules
    // contact: ContactRoutes = new ContactRoutes();
    
    public initRoutes(_App: express.Application, _Router: express.Router): void {
        
        
     
        _App.use('/API/contact', this.novaFunkcija3);
        
    }
    
    
    novaFunkcija3(_Req: express.Request, _Res: express.Response, _Next: express.NextFunction): void {
        
        console.log('treća...');
        const DataHubResponse = new LayerDataHub.Response();
        _Next();
        _Res.send(DataHubResponse);
    }
    
}
