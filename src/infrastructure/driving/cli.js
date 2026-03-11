// src/infrastructure/driving/cli.js
//
// INFRAESTRUCTURA — Adaptador conductor (driving adapter)
// Este es el punto de entrada desde la terminal.
// Toma el patrón del argumento, llama al caso de uso, e imprime los resultados.
// No contiene lógica de negocio: solo traduce entre "el mundo CLI" y el dominio.

const SearchNamesUseCase = require("../../application/SearchNamesUseCase");
const FileNamesRepository = require("../driven/FileNamesRepository");

async function main() {
  const pattern = process.argv[2];

  if (!pattern) {
    console.error("Uso: node cli.js <expresión_regular>");
    console.error("Ejemplo: node cli.js ^Ana");
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
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
