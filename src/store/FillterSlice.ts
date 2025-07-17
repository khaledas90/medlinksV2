import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterAttributes {
  manufacturer_id: string[];
  product_model_id: string[];
  product_year_id: string[];
  fuel_type_id: string[];
  product_out_color_id: string[];
  product_in_color_id: string[];
}

interface FilterState {
  page: number;
  search: string;
  price?: [number, number];
  attribute: FilterAttributes;
  limit: number;
  sort_by: string;
  is_New?: 0 | 1 | null;
}

const initialState: FilterState = {
  page: 1,
  search: '',
  limit: 12,
  sort_by: '',
  price: undefined,
  is_New: null,
  attribute: {
    manufacturer_id: [],
    product_model_id: [],
    product_year_id: [],
    fuel_type_id: [],
    product_out_color_id: [],
    product_in_color_id: [],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<FilterState['page']>) {
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<FilterState['search']>) {
      state.search = action.payload;
    },
    setPrice(state, action: PayloadAction<FilterState['price']>) {
      state.price = action.payload;
    },
    setLimit(state, action: PayloadAction<FilterState['limit']>) {
      state.limit = action.payload;
    },
    setSortBy(state, action: PayloadAction<FilterState['sort_by']>) {
      state.sort_by = action.payload;
    },
    setIsNew(state, action: PayloadAction<FilterState['is_New']>) {
      state.is_New = action.payload;
    },
    setAttribute(
      state,
      action: PayloadAction<{
        filterType: keyof FilterAttributes;
        optionId: string;
      }>
    ) {
      const { filterType, optionId } = action.payload;
      if (!Array.isArray(state.attribute[filterType])) {
        state.attribute[filterType] = [];
      }
      const currentValues = state.attribute[filterType] ?? [];
      const isSelected = currentValues.includes(optionId);
      if (!isSelected) {
        state.attribute[filterType] = [...currentValues, optionId];
      }
    },
    toggleFilterAttribute(
      state,
      action: PayloadAction<{
        filterType: keyof FilterAttributes;
        optionId: string;
      }>
    ) {
      const { filterType, optionId } = action.payload;

      if (!Array.isArray(state.attribute[filterType])) {
        state.attribute[filterType] = [];
      }

      const currentValues = state.attribute[filterType] ?? [];
      const isSelected = currentValues.includes(optionId);

      state.attribute[filterType] = isSelected
        ? currentValues.filter((id) => id !== optionId)
        : [...currentValues, optionId];
    },

    setSelectedFilters(
      state,
      action: PayloadAction<Partial<FilterAttributes>>
    ) {
      Object.keys(action.payload).forEach((key) => {
        const filterKey = key as keyof FilterAttributes;
        if (Array.isArray(action.payload[filterKey])) {
          state.attribute[filterKey] = action.payload[filterKey] ?? [];
        }
      });
    },

    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
