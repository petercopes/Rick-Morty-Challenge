export interface APIResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export enum CHARACTER_STATUS{
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown"
}
