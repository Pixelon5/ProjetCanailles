import {Chien} from './chien.model';
import {Deserializable} from './Deserializable';

export class Reproducteur extends Chien implements Deserializable {

    deserialize(input: any): Reproducteur {
      Object.assign(this, input);
      return this;
    }
}
