import * as express from 'express';
import { Router } from 'express';
import { ContactRoutes } from '../api/contact/contact.routes';
import { LayerDataHub } from '../../dependencies/layers/data-hub/data-hub';


export class BackendRouter {
    
    // modules
    contact: ContactRoutes = new ContactRoutes();
    
    public initRoutes(_App: express.Application, _Router: Router): void {
        const DataHubResponse = new LayerDataHub.Response();
        
        _App.use('/API/contact', (_Req: express.Request, _Res: express.Response) => {
    
    
            _Res.send(DataHubResponse);
        });
        
        
        
    }
    
}
