export interface RepositoryInterface<T> {
  create(data: object): Promise<T>;
  list(): Promise<T[]>;
  get(id: number): Promise<T>;
  delete(id: number): void;
  update(id: number, payload: object): Promise<T>;
}
