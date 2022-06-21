//action creator
export const addItemAction = (data) => {
  return {
    type: "addItem",
    payload: data,
  };
};
