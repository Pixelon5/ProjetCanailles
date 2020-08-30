export interface Deserializable {
  deserialize(input: any): Deserializable;
}