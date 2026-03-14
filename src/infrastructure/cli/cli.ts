// src/infrastructure/cli/cli.ts
//
// INFRAESTRUCTURA — Adaptador de entrada (CLI)

import { SearchNamesUseCase } from '../../application/SearchNamesUseCase';
import { FileNamesRepository } from '../repositories/FileNamesRepository';

async function main() {
  const pattern = process.argv[2];

  if (!pattern) {
    console.error("Uso: npx ts-node src/infrastructure/cli/cli.ts <expresión_regular>");
    console.error("Ejemplo: npx ts-node src/infrastructure/cli/cli.ts ^Ana");
    process.exit(1);
  }

  // Ensamblar la aplicación (Dependency Injection manual)
  const repository = new FileNamesRepository("./data/nombres.txt");
  const searchService = new SearchNamesUseCase(repository);

  try {
    const result = await searchService.search(pattern);

    console.log(`\n Buscando patrón: /${result.pattern}/i`);
    console.log(`Nombres revisados: ${result.totalSearched}`);
    console.log(`Coincidencias: ${result.totalMatches}\n`);

    if (result.hasMatches()) {
      result.matches.forEach((name) => console.log(`  → ${name}`));
    } else {
      console.log("ningún nombre coincide");
    }

    console.log();
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
