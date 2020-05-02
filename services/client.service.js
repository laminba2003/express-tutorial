import { Client } from "../models/client";

export class ClientService {
    
    getClients() {
        const clients = [];
        const client1 = new Client();
        client1.nom = "thomson";
        client1.prenom = "Gabriel";
        clients.push(client1);
        const client2 = new Client();
        client2.nom = "Ford";
        client2.prenom = "Taraji";
        clients.push(client2);
        return clients;
    }

}