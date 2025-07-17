export interface ListMeta {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface QueryResponse<DataType> {
  page: ListMeta;
  content: DataType;
}
