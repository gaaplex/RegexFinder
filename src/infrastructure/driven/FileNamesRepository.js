// src/infrastructure/driven/FileNamesRepository.js
//
// INFRAESTRUCTURA — Adaptador conducido (driven adapter)
// Implementa el puerto NamesRepository usando el sistema de archivos.
// Es el único lugar en toda la app que sabe que los nombres vienen de un .txt.
// Si mañana cambias a una base de datos, solo cambias ESTE archivo.

const fs = require("fs").promises;
const path = require("path");
const NamesRepository = require("../../domain/ports/NamesRepository");

class FileNamesRepository extends NamesRepository {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  async getAll() {
    const absolutePath = path.resolve(this.filePath);
    const content = await fs.readFile(absolutePath, "utf-8");

    // Separar por líneas y limpiar vacíos
    return content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}

module.exports = FileNamesRepository;
