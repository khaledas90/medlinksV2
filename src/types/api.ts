export interface ListMeta {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  lastPage?: number;
  totalItems: number;
  page: number;
}

export interface QueryResponse<DataType> {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: DataType;
  sort: { sorted: boolean; empty: boolean; unsorted: boolean };
  pageable: {
    sort: { sorted: boolean; empty: boolean; unsorted: boolean };
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
  };
}
