import { SearchResult } from './SearchResult';

describe('SearchResult Entity', () => {
  it('debe inicializarse correctamente con los valores dados', () => {
    const result = new SearchResult({
      pattern: 'regex',
      matches: ['match1', 'match2'],
      totalSearched: 10
    });

    expect(result.pattern).toBe('regex');
    expect(result.totalSearched).toBe(10);
    expect(result.matches).toEqual(['match1', 'match2']);
  });

  it('debe calcular el número correcto de coincidencias en totalMatches', () => {
    const result = new SearchResult({
      pattern: 'regex',
      matches: ['match1', 'match2', 'match3'],
      totalSearched: 15
    });

    expect(result.totalMatches).toBe(3);
  });

  it('hasMatches debe ser true si existen coincidencias', () => {
    const result = new SearchResult({
      pattern: 'regex',
      matches: ['match1'],
      totalSearched: 5
    });

    expect(result.hasMatches()).toBe(true);
  });

  it('hasMatches debe ser false si la lista de coincidencias está vacía', () => {
    const result = new SearchResult({
      pattern: 'regex',
      matches: [],
      totalSearched: 5
    });

    expect(result.hasMatches()).toBe(false);
  });
});
