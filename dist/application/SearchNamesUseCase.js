"use strict";
// src/application/SearchNamesUseCase.ts
//
// APLICACIÓN — Caso de Uso
// Aquí vive la lógica de negocio real.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNamesUseCase = void 0;
const SearchResult_1 = require("../domain/SearchResult");
class SearchNamesUseCase {
    namesRepository;
    constructor(namesRepository) {
        this.namesRepository = namesRepository;
    }
    async search(regexPattern) {
        // 1. Validar que la expresión regular sea válida
        let regex;
        try {
            regex = new RegExp(regexPattern, "i"); // "i" = case insensitive
        }
        catch (e) {
            throw new Error(`Expresión regular inválida: "${regexPattern}"`);
        }
        // 2. Obtener los datos (sin saber de dónde vienen)
        const allNames = await this.namesRepository.getAll();
        // 3. Aplicar la lógica de búsqueda
        const matches = allNames.filter((name) => regex.test(name));
        // 4. Devolver una entidad del dominio
        return new SearchResult_1.SearchResult({
            pattern: regexPattern,
            matches,
            totalSearched: allNames.length,
        });
    }
}
exports.SearchNamesUseCase = SearchNamesUseCase;
