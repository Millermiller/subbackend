
export abstract class EntityForm<T> {
  id: number | null
  public abstract fromDTO(): T
}
