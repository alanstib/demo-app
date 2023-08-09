declare global {
  type FixedSizeArray<L extends number, T> = Array<T> & {
    0: T;
    length: L;
  };
}

export {};
