import { runApp } from "./app";
import * as readline from "readline";

function showMenu(): void {
  console.log("\n==== TypeScript Apps ====");
  console.log("1. Voca App");
  console.log("0. Close");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runMenu(): void {
  showMenu(); // メニューを表示

  rl.question("\nSelect menu #: ", (selection: string) => {
    switch (selection) {
      case "1":
        runApp(); // 単語アプリを実行
        runMenu(); // 単語アプリの終了後にメニューを再表示
        break;
      case "0":
        console.log("Closing App...");
        rl.close();
        break;
      default:
        console.log("Invalid selection. Please try again.");
        runMenu();
        break;
    }
  });
}

runMenu();