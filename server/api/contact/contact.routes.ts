import * as express from 'express';
import { Router } from 'express';
import { ContactController } from './contact.controller';


export class ContactRoutes {
    
    constructor() {
    
    }
    
    public routes(_App: express.Application, _Router: Router): void {
        
        const contactController: ContactController = new ContactController();
        _App.use('/', contactController.sendMail.bind(contactController.sendMail));
        
    }
    
}
