import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', async (_: Request, res: Response, __: NextFunction) => {
    res.render('skyway');
});

export default router;

