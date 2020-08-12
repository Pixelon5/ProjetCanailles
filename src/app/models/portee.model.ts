import { Deserializable } from './Deserializable';

export class Portee implements Deserializable {
    id: string;
    nom: string;
    photo: string;
    dateNaissance: Date;
    pere: string;
    mere: string;
    race: string;

    getDateNaissanceString(): string {
        return this.dateNaissance.toLocaleDateString('fr');
    }

    deserialize(input: any): Portee {
        Object.assign(this, input);
        this.dateNaissance = new Date(input.dateNaissance);
        return this;
    }
}