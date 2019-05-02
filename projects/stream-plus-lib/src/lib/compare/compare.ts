export class Compare {
  public static isNull(value: any): boolean {
    return value === null;
  }

  public static isEqual(prev: any, next: any): boolean {
    return prev === next;
  }

  public static isUndefined(value: any): boolean {
    return value === undefined;
  }

  public static isNullOrUndefined(value: any): boolean {
    return this.isNull(value) || this.isUndefined(value);
  }

  public static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  public static isEmpty(value: string): boolean {
    return this.isNullOrUndefined(value) || value === '';
  }

  public static isTrue(value: boolean): boolean {
    return value === true;
  }

  public static isFalse(value: boolean): boolean {
    return value === false;
  }

  public static isFunction(value: boolean): boolean {
    return typeof value === 'function';
  }


}
