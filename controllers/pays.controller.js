import express from 'express';
import { PaysService } from "../services/pays.service";

const router = express.Router();
const service = new PaysService();

router.get('/', (request, response) => {
    response.send(service.getPays());
});

module.exports = router;