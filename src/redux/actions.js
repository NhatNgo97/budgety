//action creator
export const addItemAction = (data) => {
  return {
    type: "addItem",
    payload: data,
  };
};

export const deleteItemAction = (id) => {
  return {
    type: "deleteItem",
    payload: id,
  };
};
