import http, { Server, IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import config from './config';
import { RouteHandler, routes } from './helpers/RouteHandler';
import './routes';

const server: Server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {

        const method = req.method?.toUpperCase() || '';
        const path = req.url || '';
        const methodMap = routes.get(method);
        const handler: RouteHandler | undefined = methodMap?.get(path);

        if (handler) {
            handler(req, res);
        } else {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({
                success: false,
                message: "Route not found",
                path,
            }));
        }

        // users route
        // if (req.url == "/api/users" && req.method == 'POST') {
            // const user = {
            //     id: 9,
            //     name: "Ashiqur Rahman",
            // }
            // res.writeHead(200, {"content-type": "application/json"});
            // res.end(JSON.stringify(user));

        //     let body = '';

        //     // listen for data chunk
        //     req.on('data', (chunk) => {
        //         body += chunk.toString();
        //     });

        //     req.on('end', () => {
        //         try {
        //             const parseBody = JSON.parse(body);
        //             console.log(parseBody);
        //             console.log('catching current changes');
        //             // res.end(body);
        //             res.end(JSON.stringify(parseBody));
        //         } catch (error: any) {
        //             console.log(error?.message);
        //         }
        //     });

        // }
    }
);

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});