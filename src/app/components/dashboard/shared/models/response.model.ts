export interface ResponseData<T> {
  content: T;
  size: number;
  totalElements: number;
  totalPages: number;
}
