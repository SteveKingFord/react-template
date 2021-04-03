/*
 * @Author: kingford
 * @Date: 2021-04-01 13:50:14
 * @LastEditTime: 2021-04-03 15:02:58
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
