// src/domain/ports/SearchService.js
//
//  DOMINIO — Puerto de entrada (driving port)
// Define el CONTRATO que el mundo exterior usa para hablar con el dominio.
// Cualquier "conductor" (CLI, HTTP, tests) debe usar esta interfaz.

class SearchService {
  /**
   * Busca nombres que coincidan con la expresión regular dada.
   * @param {string} regexPattern - La expresión regular como string
   * @returns {Promise<SearchResult>}
   */
  async search(regexPattern) {
    throw new Error("SearchService.search() debe ser implementado por el caso de uso");
  }
}

module.exports = SearchService;
