// src/application/SearchNamesUseCase.js
//
// APLICACIÓN — Caso de Uso
// Aquí vive la lógica de negocio real.
// Implementa el puerto de entrada (SearchService) y usa el puerto de salida (NamesRepository).
// No sabe de archivos ni de CLI: solo orquesta el dominio.

const SearchService = require("../domain/ports/SearchService");
const SearchResult = require("../domain/SearchResult");

class SearchNamesUseCase extends SearchService {
  /**
   * @param {NamesRepository} namesRepository - Inyectado desde afuera (puerto de salida)
   */
  constructor(namesRepository) {
    super();
    this.namesRepository = namesRepository;
  }

  async search(regexPattern) {
    // 1. Validar que la expresión regular sea válida
    let regex;
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

module.exports = SearchNamesUseCase;
