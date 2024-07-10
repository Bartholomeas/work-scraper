export const debounce = <T extends (...args: any[]) => any, P = any>(fn: T, wait = 300) => {
  let timer: NodeJS.Timeout;

  return function (this: P, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
