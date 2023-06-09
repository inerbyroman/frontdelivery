import axios from "axios";
const BACK_URL = process.env.REACT_APP_BACK_URL;

export const getShopsAPI = async () => {
  try {
    const response = await axios.get(`${BACK_URL}/shops`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getShopMenuAPI = async (shopId) => {
  try {
    const response = await axios.get(`${BACK_URL}/menu/${shopId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postOrderAPI = async (data) => {
  try {
    const response = await axios.post(`${BACK_URL}/order`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderAPI = async (email, phone) => {
  try {
    const response = await axios.get(`${BACK_URL}/order/${email}/${phone}`);
     return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCouponsAPI = async () => {
  try {
    const response = await axios.get(`${BACK_URL}/coupons`);
    return response.data;
  } catch (error) {
    console.error(error); 
  }
};

export const getCurrentCouponAPI = async (code) => {
  try {
    const response = await axios.get(`${BACK_URL}/coupons/${code}`);
     return response.data;
  } catch (error) {
    console.error(error); 
  }
};

