// src/domain/ports/NamesRepository.ts
//
// DOMINIO — Puerto de salida (driven port)

export interface NamesRepository {
  getAll(): Promise<string[]>;
}
