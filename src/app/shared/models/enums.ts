export enum Genre {
  MALE = 'Mâle',
  FEMELLE = 'Femelle'
}

export function getGenre(genre: string): Genre {
  if (genre === 'males') {
    return Genre.MALE;
  } else if (genre === 'femelles') {
    return Genre.FEMELLE;
  } else {
    return null;
  }
}
