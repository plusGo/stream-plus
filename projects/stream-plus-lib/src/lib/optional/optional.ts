import {Assert} from '../assert/assert';
import {Compare} from '../compare/compare';

export class Optional<T> {
  private static EMPTY: Optional<null> = new Optional<null>(null);
  private readonly value: T;

  private constructor(value?: T) {
    this.value = value;
  }

  public static empty<T>(): Optional<T> {
    return Optional.EMPTY;
  }

  public static of<T>(value: T): Optional<T> {
    Assert.nonNull(value, 'optional:value can not be null');
    return new Optional<T>(value);
  }

  public static ofNullable<T>(value: T): Optional<T> {
    return Compare.isNullOrUndefined(value) ? Optional.empty<T>() : Optional.of<T>(value);
  }

  public isPresent(): boolean {
    return !Compare.isNullOrUndefined(this.value);
  }

  public get(): T {
    if (!this.isPresent()) {
      console.error('optional:no value present');
    } else {
      return this.value;
    }
  }

  public ifPresent(consumer: (value: T) => void): void {
    Assert.nonNull(consumer, 'optional:ifPresent:consumer can not be null');
    consumer(this.value);
  }

  public filter(predicate: (value: T) => boolean): Optional<T> {
    if (!this.isPresent()) {
      return this;
    } else {
      Assert.nonNull(predicate, 'optional:filter:predicate can not be null');
      return predicate(this.value) ? this : Optional.empty<T>();
    }
  }

  public map<R>(fn: (value: T) => R): Optional<R> {
    Assert.nonNull(fn, 'optional:map:fn can not be null');
    return !this.isPresent() ? Optional.empty<R>() : Optional.ofNullable<R>(fn(this.value));
  }

  public orElse(value: T): T {
    return this.isPresent() ? this.value : value;
  }

  public orElseGet(supplier: () => T): T {
    Assert.nonNull(supplier, 'optional:orElseGet:supplier can not be null');
    return this.isPresent() ? this.value : supplier();
  }

  public orElseThrow(supplier: () => void): T | void {
    Assert.nonNull(supplier, 'optional:orElseThrow:supplier can not be null');
    return this.isPresent() ? this.value : supplier();
  }

}
