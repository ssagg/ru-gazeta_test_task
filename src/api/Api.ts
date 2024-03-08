import { BASE_API_URL } from "../constants/constants";
import { TPost } from "../models/models";

export const getPosts = async (): Promise<TPost[]> => {
  return await fetch(BASE_API_URL).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Error ${response.status}`);
  });
};

export const getPost = async (
  id: string | undefined
): Promise<TPost | null> => {
  return await fetch(`${BASE_API_URL}/${id}`).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Error ${response.status}`);
  });
};
