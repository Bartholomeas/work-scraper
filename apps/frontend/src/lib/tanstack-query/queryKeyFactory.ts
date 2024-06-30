type QueryKey = readonly unknown[];

/**
 * Creates a query key factory for generating query keys based on the provided entity.
 * @template TEntity - The type of the entity.
 * @param {TEntity} _entity - The entity for which query keys will be created.
 * @returns {Object} An object containing methods to generate query keys for lists and single entities.
 */
export const createQueryKeyFactory = <TEntity extends string>(_entity: TEntity) => {
  return {
    // With these you can get existing instance of query
    entity: [{ entity: _entity }] as const,
    lists: [{ entity: _entity, scope: "list" }] as const,
    //    ---

    list: function <TName extends string, TParams extends Record<string, unknown>>(name: TName, params?: TParams) {
      return [{ ...this.lists[0], name, params }] as const;
    },
    single: function <TId extends string, TName extends string>(id: TId, name: TName) {
      return [{ ...this.entity[0], id, name }] as const;
    },
  };
};

// export type QueryFunctionContextCreator<KeyFactory extends Record<string, QueryKey | ((...args: any[]) => QueryKey)>> = {
//   [K in keyof KeyFactory]: KeyFactory[K] extends (...args: any[]) => QueryKey
//     ? QueryFunctionContext<ReturnType<KeyFactory[K]>>
//     : KeyFactory[K] extends QueryKey
//       ? QueryFunctionContext<KeyFactory[K]>
//       : never;
// }
// export type QueryFunctionContextCreator<TKeyFactory extends Record<string, (...args: any[]) => QueryKey>> = {
//   [K in keyof TKeyFactory]: UseQueryOptions<unknown, unknown, unknown, unknown>["queryKey"];
//   // [K in keyof TKeyFactory]: UseQueryOptions<unknown, unknown, unknown, QueryKey>["queryKey"];
// };
// [K in keyof TKeyFactory]: QueryFunctionContext<ReturnType<TKeyFactory[K]>>;

type QueryFunctionContext<TQueryKey extends QueryKey = QueryKey> = {
  queryKey: TQueryKey;
  signal: AbortSignal;
  meta: unknown | undefined;
};

// Not correctly typed queryKey, but had no idea
export type QueryFunctionContextCreator<TKeyFactory extends Record<string, (...args: any[]) => QueryKey>> = {
  [K in keyof TKeyFactory]: QueryFunctionContext<any>["queryKey"];
};
