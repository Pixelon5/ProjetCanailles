import {Chien} from './chien.model';
import {Deserializable} from './Deserializable';

export class Chiot extends Chien {
    prixVente: number;

    deserialize(input: any): Deserializable {
      Object.assign(this, input);
      return this;
    }
}
