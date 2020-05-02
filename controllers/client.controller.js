import express from 'express';
import { ClientService } from "../services/client.service";

const router = express.Router();
const service = new ClientService();

router.get('/', (request, response) => {
    response.send(service.getClient());
});

module.exports = router;