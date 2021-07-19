import { readData } from "../repositories/readData";
export const GET_ALL_DATA = "GET_ALL_DATA";

export const getAllData = () =>async (dispatch)=>
{
    try{
      const getAllData = await readData();
          dispatch({
              data: getAllData,
              type: GET_ALL_DATA,
          });
    }
    catch(error){

      throw (error);
    };
}

  
