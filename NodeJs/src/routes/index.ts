import parseBody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHandler";
import sendJSON from "../helpers/sendJSON";

addRoutes('GET', '/', (req, res) => {
    sendJSON(res, 200, {
        message: "Hello from node js with TypeScript!",
        path: req.url
    });
});

addRoutes('GET', '/api', (req, res) => {
    sendJSON(res, 200, {
        message: "Health status is OK!",
        path: req.url
    })
});

addRoutes('POST', '/api/users', async (req, res) => {
    const body = await parseBody(req);
    sendJSON(res, 200, { success: true, data: body });
});