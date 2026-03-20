// src/domain/ports/out/NamesRepository.ts
//
// DOMINIO — Puerto de salida (driven port)

export interface NamesRepository {
  getAll(): Promise<string[]>;
}
