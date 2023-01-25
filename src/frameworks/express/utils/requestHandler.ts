import { RequestHandler } from 'express';

export default function makeRequestHandler(
    controller: Function
): RequestHandler {
    return async function (req, res) {
        const httpRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
            user: (req as any).user,
        };
        const result = await controller(httpRequest);
        return res.status(result.statusCode).json(result.body);
    };
}
