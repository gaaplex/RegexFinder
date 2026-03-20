// src/domain/ports/in/SearchService.ts
//
// DOMINIO — Puerto de entrada (driving port)

import { SearchResult } from '../../SearchResult';

export interface SearchService {
  search(regexPattern: string): Promise<SearchResult>;
}
