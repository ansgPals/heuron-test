export interface UseApiOptions {
  url: string;
  params?: Record<string, string | number>;
  immediate?: boolean;
}
