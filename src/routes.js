import { Router } from 'express';

import ClientController from './app/controllers/ClientController';

const routes = new Router();

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);
routes.get('/clients/:id', ClientController.show);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

export default routes;
