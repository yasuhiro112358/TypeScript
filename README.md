# TypeScript

## Installation
```bash
npm install -g typescript # Install TypeScript globally
tsc -v # Check the version of TypeScript
```

## Create a new TypeScript project
```bash
mkdir my-typescript-project
cd my-typescript-project
npm init -y # Create a new Node.js project
npm install --save-dev typescript # Install TypeScript as a development dependency
npx tsc --init # Create a new TypeScript configuration file
```

## TypeScript Configuration
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
  }
}
```

```bash
npx tsc # Compile the TypeScript files
node dist/index.js # Run the compiled JavaScript file
```

```bash
npx tsc --watch # Watch the TypeScript files and compile them automatically
```

