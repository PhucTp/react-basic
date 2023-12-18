import axios from "axios";

const API_URL = "https://localhost:5001/";
const net = axios.create({
  baseURL: API_URL,
});

export const getSieuThiList = async (requestBody) => {
  try {
    const res = await net.post("api/sieuthi/get", requestBody);
    return res.data;
  } catch (error) {
    console.error("Error fetching SieuThiList:", error);
    throw error;
  }
};

export const getMatBangList = async (requestBody) => {
  try {
    const res = await net.post("api/matbang/get", requestBody);
    return res.data;
  } catch (error) {
    console.error("Error fetching MatBangList:", error);
    throw error;
  }
};

export const postMatBang = async (requestBody) => {
  try {
    const res = await net.post("api/matbang/post", requestBody);
    return res.data;
  } catch (error) {
    console.error("Error posting MatBang:", error);
    throw error;
  }
};

export const getTieuChi = async (requestBody) => {
  try {
    const res = await net.post("api/tieuchi/get", requestBody);
    return res.data;
  } catch (error) {
    console.error("Error fetching TieuChi:", error);
    throw error;
  }
};

export const getSieuThibyId = async (id) => {
  try {
    const res = await net.get(`api/sieuthi/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching SieuThi by ID ${id}:`, error);
    throw error;
  }
};

export const updateSieuThibyId = async (id, requestBody) => {
  try {
    const res = await net.put(`api/matbang/${id}`, requestBody);
    return res.data;
  } catch (error) {
    console.error(`Error updating SieuThi by ID ${id}:`, error);
    throw error;
  }
};
