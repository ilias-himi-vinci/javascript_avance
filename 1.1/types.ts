interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
}

interface FilmFullInfo extends Film {
  budget?: number;
  description?: string;
  imageUrl?: string;
}

export type { Film, FilmFullInfo };