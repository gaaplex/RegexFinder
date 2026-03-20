// src/infrastructure/repositories/FileNamesRepository.ts
//
// INFRAESTRUCTURA — Adaptador (implementación del repositorio)

import * as fs from 'fs/promises';
import * as path from 'path';
import { NamesRepository } from '../../domain/ports/out/NamesRepository';

export class FileNamesRepository implements NamesRepository {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async getAll(): Promise<string[]> {
    const absolutePath = path.resolve(this.filePath);
    const content = await fs.readFile(absolutePath, "utf-8");

    // Separar por líneas y limpiar vacíos
    return content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}
