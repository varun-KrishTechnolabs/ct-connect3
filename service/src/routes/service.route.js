import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';

const serviceRouter = Router();

serviceRouter.get('/', async (req, res) => {
  logger.info('Cart update extension executed');
  res.status(200);
  res.send('Hello world from the service of the connector...!!!');
});

export default serviceRouter;
