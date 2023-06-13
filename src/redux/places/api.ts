import axios, { AxiosResponse } from "axios";
import { Places } from "../../utils/types";

let URL = "";

export const getPlacesAPI = async (getPlacesParam?: { params: { category: string[] } }) => {
  try {
    const res: AxiosResponse<Places[]> = await axios.get(`${URL}/places`, getPlacesParam);
    return res.data;
  } catch (err) {}
};

export const updatePlacesAPI = async (id: number, payload: { title: string; price: number }) => {
  try {
    const res: AxiosResponse<Places> = await axios.patch(`${URL}/places/${id}`, payload);
    return res.data;
  } catch (err) {}
};
