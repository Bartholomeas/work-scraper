export const isKeyOf = <T extends object>(obj: T, key: keyof any): key is keyof T => key in obj;
