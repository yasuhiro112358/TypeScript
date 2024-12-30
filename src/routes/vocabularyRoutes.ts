import { VocabularyController } from "../controllers/vocabularyController";

const vocabularyController = new VocabularyController();

export function addWord(term: string, definition: string): void {
  vocabularyController.addWord(term, definition);
}

export function getWords(): void {
  console.log(vocabularyController.getWords());
}
