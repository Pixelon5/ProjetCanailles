import {Deserializable} from './Deserializable';

export class Chien implements Deserializable {
  nom: string;
  genre: string;
  robe: string;
  photo: string;

  deserialize(input: any): Deserializable {
    Object.assign(this, input);
    return this;
  }

}
