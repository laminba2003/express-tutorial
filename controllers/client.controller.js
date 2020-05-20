import express from 'express';
import { ClientService } from "../services/client.service";

const router = express.Router();
const service = new ClientService();

router.get('/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await service.getClient(id));
});

router.post('/', async (request, response) => {
    const client = await service.saveClient(request.body);
    response.send(client);
});

module.exports = router;


