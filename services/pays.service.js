import { Pays } from "../models/pays";

export class PaysService {
    
    getPays() {
        const pays = [];
        const senegal = new Pays();
        senegal.code = "sn";
        senegal.nom = "Senegal";
        pays.push(senegal);
        const france = new Pays();
        france.code = "fr";
        france.nom = "France";
        pays.push(france);
        const angleterre = new Pays();
        angleterre.code = "en";
        angleterre.nom = "Angleterre";
        pays.push(angleterre);
        return pays;
    }

}