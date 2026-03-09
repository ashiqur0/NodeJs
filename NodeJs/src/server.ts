import http, { Server, IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import config from './config';

const server: Server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {

        // root route
        if (req.url == '/' && req.method == 'GET') {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Hello from node js with Typescript!",
                path: req.url
            }));
        }

        // health route
        if (req.url == '/api' && req.method == 'GET') {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Health status is OK!",
                path: req.url
            }));
        }

        // users route
        if (req.url == "/api/users" && req.method == 'POST') {
            // const user = {
            //     id: 9,
            //     name: "Ashiqur Rahman",
            // }
            // res.writeHead(200, {"content-type": "application/json"});
            // res.end(JSON.stringify(user));

            let body = '';

            // listen for data chunk
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                try {
                    const parseBody = JSON.parse(body);
                    console.log(parseBody);
                    console.log('catching current changes');
                    // res.end(body);
                    res.end(JSON.stringify(parseBody));
                } catch (error: any) {
                    console.log(error?.message);
                }
            });

        }
    }
);

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});