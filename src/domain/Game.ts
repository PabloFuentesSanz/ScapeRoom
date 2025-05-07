export interface Game {
    levels: Level[]
}

export interface Level {
    name: string;
    seconds: number;
}

export interface GameRepository {
    nextLevel: () => Level;
    prevLevel: () => Level;

}