export interface TVShow {
    id: number;
    name: string;
    ratings: number[];
    episodes: [{name: string, length:number}] | [];
}