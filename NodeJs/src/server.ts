import http, { Server, IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import config from './config';

const server: Server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        if (req.url == '/' && req.method == 'GET') {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Hello from node js with Typescript!",
                path: req.url
            }));
        }
    }
);

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});