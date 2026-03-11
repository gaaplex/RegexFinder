// src/domain/ports/NamesRepository.js
//
//  DOMINIO — Puerto de salida (driven port)
// Define el CONTRATO que el dominio necesita para obtener nombres.
// Es solo una interfaz: dice QUÉ se necesita, no CÓMO se obtiene.
// El dominio no sabe si los nombres vienen de un archivo, base de datos, API, etc.

class NamesRepository {
  /**
   * Devuelve todos los nombres disponibles.
   * @returns {Promise<string[]>}
   */
  async getAll() {
    throw new Error("NamesRepository.getAll() debe ser implementado por un adaptador");
  }
}

module.exports = NamesRepository;
