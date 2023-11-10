export function groupBy<T>(array: T[], selector: (item: T) => string) {
  return array.reduce<Record<number, T[]>>((acc, item) => {
    const by = selector(item);

    if (!acc[by]) {
      acc[by] = [];
    }

    acc[by].push(item);
    return acc;
  }, {});
}
