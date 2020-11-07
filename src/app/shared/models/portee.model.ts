import { Deserializable } from './Deserializable';
import {Chiot} from './chiot.model';
import {Genre} from './enums';

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

    getNbGenre(genre: Genre): number {
      return this.chiots ? this.chiots.filter(c => c.genre === genre).length : 0;
    }

    getDateDisponible(): Date {
      return new Date(this.chiots
      .map(chiot => chiot.dateDisponible)
      .reduce((minDate: Date, currentDate: Date) => {
        return currentDate < minDate ? currentDate : minDate;
      }));
    }

    getDateDisponibleString(): string {
      return this.getDateDisponible().toLocaleDateString('fr');
    }

    deserialize(input: any): Portee {
        Object.assign(this, input);
        this.dateNaissance = new Date(input.dateNaissance);
        return this;
    }
}
