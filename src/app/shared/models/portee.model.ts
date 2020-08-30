import { Deserializable } from './Deserializable';
import {Chiot} from './chiot.model';

export class Portee implements Deserializable {
    id: string;
    nom: string;
    photo: string;
    dateNaissance: Date;
    pere: string;
    mere: string;
    race: string;
    chiots: Chiot[];

    getDateNaissanceString(): string {
        return this.dateNaissance.toLocaleDateString('fr');
    }

    deserialize(input: any): Portee {
        Object.assign(this, input);
        this.dateNaissance = new Date(input.dateNaissance);
        return this;
    }
}
