export const createArrayWithNumber = (max: number, fill?: string) => {
  return new Array(max).fill('/').map((_, index) => (fill ? fill : `${index}`));
};
