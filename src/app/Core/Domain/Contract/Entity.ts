export abstract class Entity {
  public abstract getId(): number | string
  public abstract toDTO(): any
}
