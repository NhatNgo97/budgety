import { createSelector } from "reselect";

export const itemsSelector = (state) => state.items;
export const searchFilterSelector = (state) => state.filters.search;
export const orderFilterSelector = (state) => state.filters.order;

export const remainingSelector = createSelector(
  itemsSelector,
  searchFilterSelector,
  orderFilterSelector,
  (items, search, order) => {
    const searchItems = items.filter((item) =>
      item.description.includes(search)
    );
    if (order === "ascending") {
      return searchItems.sort((a, b) => a.amount - b.amount);
    }
    if (order === "descending") {
      return searchItems.sort((a, b) => -a.amount - b.amount);
    }
    return searchItems;
  }
);

//ascending
//descending
