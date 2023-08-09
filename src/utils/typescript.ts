type SomeRecord = Record<string, unknown>;

const typedKeys = Object.keys as <T extends SomeRecord>(
  o: T,
) => Extract<keyof T, string>[];

const typedValues = Object.values as <T extends SomeRecord>(o: T) => T[keyof T][];

const typedEntries = Object.entries as <T extends SomeRecord>(
  o: T,
) => [keyof T, T[keyof T]][];

const isDefined = <T>(t: T | undefined): t is T => t !== undefined;

export { isDefined, typedKeys, typedValues, typedEntries };
