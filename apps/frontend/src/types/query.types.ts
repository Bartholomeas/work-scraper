import type { ComputedRef, Ref } from "vue";

export type ReactiveQuerySearchParams<T extends Record<string, unknown>> = ComputedRef<Partial<T>> | Ref<Partial<T>>;
