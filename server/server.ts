import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { BackendRouter } from './routes/routes';


class Server {
    public app: express.Application;
    constructor() {
        
        this.app = express();
        
        this.config();
        
        this.routes();
    }
    public static bootstrap(): Server {
        return new Server();
    }
    private config(): void {
        
        // Parsers for POST data
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        
        // Point static path to dist
        this.app.use(express.static(path.join(__dirname, 'public')));
        
        /**
         * Get port from environment and store in Express.
         */
        const port = process.env.PORT || '3000';
        this.app.set('port', port);
        
        /**
         * Create HTTP server.
         */
        const server = http.createServer(this.app);
        
        /**
         * Listen on provided port, on all network interfaces.
         */
        server.listen(port, () => console.log(`API RUNNING ON LOCALHOST: ${ port }`));
        
    }
    
    private routes(): void {
        // get router
        let router: express.Router;
        router = express.Router();
        
        // create routes
        const backendRouter: BackendRouter = new BackendRouter();
        backendRouter.initRoutes(this.app, router);
        
        this.app.use(router);
        
        // Catch all other routes and return the index file
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });
        
    }
    
    
}

Server.bootstrap();
