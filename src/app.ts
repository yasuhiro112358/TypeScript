import { addWord, getWords } from "./routes/vocabularyRoutes";

export function runApp(): void {
  console.log("\n==== Voca App ====\n");

  addWord("apple", "りんご");
  addWord("banana", "バナナ");
  addWord("cherry", "さくらんぼ");

  getWords();
}
