// src/application/SearchNamesUseCase.ts
//
// APLICACIÓN — Caso de Uso
// Aquí vive la lógica de negocio real.

import { SearchService } from '../domain/ports/SearchService';
import { NamesRepository } from '../domain/ports/NamesRepository';
import { SearchResult } from '../domain/SearchResult';

export class SearchNamesUseCase implements SearchService {
  private namesRepository: NamesRepository;

  constructor(namesRepository: NamesRepository) {
    this.namesRepository = namesRepository;
  }

  async search(regexPattern: string): Promise<SearchResult> {
    // 1. Validar que la expresión regular sea válida
    let regex: RegExp;
    try {
      regex = new RegExp(regexPattern, "i"); // "i" = case insensitive
    } catch (e) {
      throw new Error(`Expresión regular inválida: "${regexPattern}"`);
    }

    // 2. Obtener los datos (sin saber de dónde vienen)
    const allNames = await this.namesRepository.getAll();

    // 3. Aplicar la lógica de búsqueda
    const matches = allNames.filter((name) => regex.test(name));

    // 4. Devolver una entidad del dominio
    return new SearchResult({
      pattern: regexPattern,
      matches,
      totalSearched: allNames.length,
    });
  }
}
