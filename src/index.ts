'use strict';

{
    // TypeScript Types
    let greeting: string = 'Hello, TypeScript!';
    let x: number = 5;
    let isLoggedIn: boolean = true; 
    let y: undefined = undefined; 
    let z: null = null;
    
    // Union Type
    let keyword: string | number; // Union Type
    keyword = 'milk';
    keyword = 5;

    // Literal Type
    let taxRate: 0.1 | 0.2 | 0.3; // Literal Type
    let myEmail: 'hiro@sample.com' | null; // Literal Type
    let result: 'Pass' | 'Fail'; // Literal Type

    // Type Alias
    type ResultStatus = 'Pass' | 'Fail'; // Type Alias
    let englishResult: ResultStatus;
    let mathResult: ResultStatus;
    
    // Array Type
    const scores: number[] = [80, 90, 100]; // Array Type
    scores[1] = 85; // OK
    // scores[1] = '85'; // Error
    scores.push(70); // OK
    // scores.push('60'); // Error

    const values: (string | number)[] = ['apple', 5, 'orange', 10]; // Union Type

    // Readonly Array
    const languages: readonly string[] = ['JavaScript', 'TypeScript', 'Ruby', 'Python']; // Readonly Array
    // languages[1] = 'Java'; // Error
    // languages.push('Go'); // Error

    // Tuple Type
    let book: [string, number, boolean]; // Tuple Type
    book = ['JavaScript', 200, true]; // OK
    // book = ['JavaScript', 200]; // Error
    // book = ['JavaScript', 200, true, 'TypeScript']; // Error
}



