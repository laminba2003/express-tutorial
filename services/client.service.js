import { Client } from "../models/client";

export class ClientService {
    
    getClient() {
        const client = [];
        const client1 = new Client();
        client1.nom = "thomson";
        client1.prenom = "Gabriel";
        client.push(client1);
        const client2 = new Client();
        client2.nom = "Ford";
        client2.prenom = "Taraji";
        client.push(client2);
        return client;
    }

}