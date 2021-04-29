export interface OrmInterface<T> {
  getClient(): Promise<T>
}
