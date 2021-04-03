/*
 * @Author: kingford
 * @Date: 2021-04-01 13:50:14
 * @LastEditTime: 2021-04-01 15:17:15
 */
export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
