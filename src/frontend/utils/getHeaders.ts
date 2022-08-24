import { AxiosRequestHeaders } from "axios";
import { ACCESS_TOKEN } from "../data/localStorage";

export const getHeaders = (): AxiosRequestHeaders => {
  const token = localStorage.getItem(ACCESS_TOKEN)?.trim();
  return {
    "x-access-token": token || "",
  };
};
