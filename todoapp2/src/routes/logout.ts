import express, { Request, Response, NextFunction } from 'express';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });
    res.redirect('/');
});

export default router;
