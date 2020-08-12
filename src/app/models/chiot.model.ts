export class Chiot {
    nom: string;
    portee: string;
    genre: string;
    robe: string;
    photo: string;
    

  constructor(public name: string, public scope: string, public kind: string, public color: string, public image: string ) {
      this.nom = name;
      this.portee = scope;
      this.genre = kind;
      this.robe = color;
      this.photo = image;
  }
}