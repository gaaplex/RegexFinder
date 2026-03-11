// src/domain/SearchResult.js
//
// DOMINIO — Entidad
// Representa el resultado puro de una búsqueda.
// No sabe nada de archivos, HTTP, ni consola.
// Solo modela "qué ES" un resultado.

class SearchResult {
  constructor({ pattern, matches, totalSearched }) {
    this.pattern = pattern;       // La expresión regular usada
    this.matches = matches;       // Array de strings que coincidieron
    this.totalSearched = totalSearched; // Cuántos nombres se revisaron
  }

  get totalMatches() {
    return this.matches.length;
  }

  hasMatches() {
    return this.matches.length > 0;
  }
}

module.exports = SearchResult;
