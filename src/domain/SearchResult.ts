// src/domain/SearchResult.ts
//
// DOMINIO — Entidad
// Representa el resultado puro de una búsqueda.

export class SearchResult {
  pattern: string;
  matches: string[];
  totalSearched: number;

  constructor({ pattern, matches, totalSearched }: { pattern: string; matches: string[]; totalSearched: number }) {
    this.pattern = pattern;
    this.matches = matches;
    this.totalSearched = totalSearched;
  }

  get totalMatches(): number {
    return this.matches.length;
  }

  hasMatches(): boolean {
    return this.matches.length > 0;
  }
}
