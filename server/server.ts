import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { RouteController } from './api/controller/routes';
import { APILogger } from './api/controller/logger';
import { APIAuthentication } from './api/controller/authentication';


class Server {
    public app: express.Application;
    constructor() {
       
        this.app = express();
        
        this.config();
        
        this.routes();
        
        this.tmpTest();
    }
    public static bootstrap(): Server {
        return new Server();
    }
    
    private config(): void {
        // set environment of the application
        // process.env.NODE_ENV = 'production';
        // process.env.NODE_ENV = 'development';
        
        // Parsers for POST data
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        
        // Point to the angular app path public (in dist folder)
        this.app.use(express.static(path.join(__dirname, 'public')));
        
        const port = process.env.PORT || '3000';
        this.app.set('port', port);
        const server = http.createServer(this.app);
        server.listen(port, () => console.log(`API RUNNING ON LOCALHOST: ${ port }`));
        
    }
    
    private routes(): void {
        
        const router: express.Router = express.Router();
        
        const authentication: APIAuthentication = new APIAuthentication();
        const routeController: RouteController  = new RouteController();
        
        if (this.app.get('env') === 'development') {
            const logger: APILogger = new APILogger();
            this.app.use(logger.logging); // only for dev purpose see morgan npm package
            console.log('Logger enabled...');
        }
        
        this.app.use(authentication.authenticating);
        routeController.initRoutes(this.app, router);
        this.app.use(router);
        
        // Catch all other routes and return the index file
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });
        
    }
    
    private tmpTest(): void {
        console.log(process.env.NODE_ENV);
        console.log(this.app.get('env'));
        
    }
    
    
}

Server.bootstrap();
