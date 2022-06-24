//action creator
export const addItemAction = (data) => {
  return {
    type: "items/addItem",
    payload: data,
  };
};

export const deleteItemAction = (id) => {
  return {
    type: "items/deleteItem",
    payload: id,
  };
};

export const searchItemAction = (data) => {
  return {
    type: "filters/searchItem",
    payload: data,
  };
};
