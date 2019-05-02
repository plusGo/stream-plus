import {Compare} from '../compare/compare';

export class Assert {
  public static isTrue(value: boolean, msg = 'value is not true') {
    if (!Compare.isTrue(value)) {
      throw new Error(`assert:${msg}`);
    }
  }

  public static isEqual(valueA: any, valueB: any, msg = 'values is not equal') {
    if (!Compare.isEqual(valueA, valueB)) {
      throw new Error(`assert:${msg}`);
    }
  }

  public static nonNull(value: any, msg = 'value is  null') {
    if (Compare.isNullOrUndefined(value)) {
      throw new Error(`assert:${msg}`);
    }
  }

  public static isNull(value: any, msg = 'value is not null') {
    if (!Compare.isNullOrUndefined(value)) {
      throw new Error(`assert:${msg}`);
    }
  }

  public static isArray(value: any[], msg = 'value is not array') {
    if (!Compare.isArray(value)) {
      throw new Error(`assert:${msg}`);
    }
  }

}
