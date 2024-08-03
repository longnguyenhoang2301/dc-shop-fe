export type ValueTransformer = (value?: any) => any;

export type KeyTransformer = (key: string | number) => string | number;

export const defaultValueTransformFunction = (value: string | number | boolean): any => value;

export const defaultKeyTransformFunction = (key: string | number) => key;

export function transformAPIContent(
  data: any,
  transformKey: any = defaultKeyTransformFunction,
  transformValue: ValueTransformer = defaultValueTransformFunction,
): any {
  if (typeof data === 'object' && data !== null) {
    if (data instanceof Array) {
      return data.map((e) => transformAPIContent(e, transformKey, transformValue));
    }
    const result: any = {};
    Object
      .entries(data)
      .forEach(([key, value]) => {
        const transformedKey: string | number = transformKey(key);
        if (typeof value === 'object' && value !== null) {
          if ('_isAMomentObject' in value) {
            result[transformedKey] = transformValue(value);
          } else {
            result[transformedKey] = transformAPIContent(value, transformKey, transformValue);
          }
        } else {
          result[transformedKey] = transformValue(value);
        }
      });
    return result;
  }
  return defaultValueTransformFunction(data);
}
