import { createSelector } from "reselect";

export const itemsSelector = (state) => state.items;
export const searchFilterSelector = (state) => state.filters.search;
export const orderFilterSelector = (state) => state.filters.order;

export const remainingSelector = createSelector(
  itemsSelector,
  searchFilterSelector,
  orderFilterSelector,
  (items, search, order) => {
    console.log(search);
    return items.filter((item) => item.description.includes(search));
  }
);
