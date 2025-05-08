export interface Game {
  puzzles: Puzzle[];
  dialogs: NarrationDialogs;
}

export interface Puzzle {
  id: string;
  name: string;
  description: string[];
}

export enum DialogTypes {
  INTRO = "intro",
  BRIEFING = "briefing",
  FAILURE = "failure",
  SUCCESS = "success",
  ENDING = "ending",
}

export type NarrationDialogs = {
  [key in DialogTypes]: string[];
};