/*
 * @Author: kingford
 * @Date: 2021-04-01 13:50:14
 * @LastEditTime: 2021-04-10 21:56:31
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) => (value === undefined || value === '' || value === null ? false : !value);

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
