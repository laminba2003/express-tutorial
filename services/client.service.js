import { Client } from "../models/client";

export class ClientService {
    
    async getClient(id) {
        const db = require("./../db")
        const connection = await db.connect();
        const [rows] = await connection.query('select * from client where id = ?', [id]);
        return rows.length ? rows[0] : null;
    }

    async createClient(client) {
        const db = require("./../db")
        const connection = await db.connect();
        const [result] = await connection.query('insert into client(nom, prenom, adresse, pays, email, telephone) values(?,?,?,?,?,?)', [client.nom, client.prenom,client.adresse,client.pays,client.email,client.telephone]);
        client.id = result.insertId;
        return client;
    };

    async updateClient(client) {
        const db = require("./../db")
        const connection = await db.connect();
        await connection.execute('update client set nom = ?, prenom=?, adresse=?, pays=?, email=?, telephone=? WHERE id=?',
        [client.nom, client.prenom, client.adresse, client.pays, client.email, client.telephone, client.id]);
        return client;
    }

    async deleteClient(id) {
        const db = require("./../db")
        const connection = await db.connect();
        await connection.execute('delete from client where id = ?', [id]);
    }

}


