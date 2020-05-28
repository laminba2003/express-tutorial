import express from 'express';
import { ClientService } from "../services/client.service";

const router = express.Router();
const service = new ClientService();

router.get('/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await service.getClient(id));
});

router.post('/', async (request, response) => {
    const client = await service.createClient(request.body);
    response.send(client);
});

router.put('/:id', async (request, response) => {
    const id = request.params.id;
    const client = request.body
    client.id = id
    response.send(await service.updateClient(client));
});

router.delete('/:id', async (request, response) => {
    const id = request.params.id;
    await service.deleteClient(id);
    response.sendStatus(200);
});

module.exports = router;


