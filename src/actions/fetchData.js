export const GET_DATA = "GET_DATA";
export const GET_ALL_DATA = "GET_ALL_DATA";

export const getData = () => {
  return {
    type: GET_DATA
  };
};

export const getAllData = users => {
  return {
    type: GET_ALL_DATA,
    users
  };
};
  
