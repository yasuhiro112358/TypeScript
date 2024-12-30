import { Word } from "../models/word";

export class VocabularyController {
  private words: Word[] = [];

  addWord(term: string, definition: string): void {
    this.words.push({ term, definition });
  }

  getWords(): Word[] {
    return this.words;
  }
}
