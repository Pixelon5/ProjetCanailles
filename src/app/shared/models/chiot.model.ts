import {Chien} from './chien.model';
import {Deserializable} from './Deserializable';

export class Chiot extends Chien {
    prixVente: number;
    dateDisponible: Date;

    deserialize(input: any): Deserializable {
      Object.assign(this, input);
      this.dateDisponible = new Date(this.dateDisponible);
      return this;
    }
}
