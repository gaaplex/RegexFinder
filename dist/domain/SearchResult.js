"use strict";
// src/domain/SearchResult.ts
//
// DOMINIO — Entidad
// Representa el resultado puro de una búsqueda.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = void 0;
class SearchResult {
    pattern;
    matches;
    totalSearched;
    constructor({ pattern, matches, totalSearched }) {
        this.pattern = pattern;
        this.matches = matches;
        this.totalSearched = totalSearched;
    }
    get totalMatches() {
        return this.matches.length;
    }
    hasMatches() {
        return this.matches.length > 0;
    }
}
exports.SearchResult = SearchResult;
