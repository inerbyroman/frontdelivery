import axios from "axios";
const BACK_URL = process.env.REACT_APP_BACK_URL;

export const getShopsAPI = async () => {
  try {
    const response = await axios.get(`${BACK_URL}/shops`);
    console.log(response.data); // Обработка успешного ответа от сервера
    return response.data;
  } catch (error) {
    console.error(error); // Обработка ошибок
  }
};

export const getShopMenuAPI = async (shopId) => {
  try {
    const response = await axios.get(`${BACK_URL}/menu/${shopId}`);
    console.log(response.data); // Обработка успешного ответа от сервера
    return response.data;
  } catch (error) {
    console.error(error); // Обработка ошибок
  }
};

export const postOrderAPI = async (data) => {
  try {
    const response = await axios.post(`${BACK_URL}/order`, data);
    console.log(response.data); // Обработка успешного ответа от сервера
    return response.data;
  } catch (error) {
    console.error(error); // Обработка ошибок
  }
};

export const getOrderAPI = async (email, phone) => {
  try {
    const response = await axios.get(`${BACK_URL}/order/${email}/${phone}`);
    console.log(response.data); // Обработка успешного ответа от сервера
    return response.data;
  } catch (error) {
    console.error(error); // Обработка ошибок
  }
};

export const getCouponsAPI = async () => {
  try {
    const response = await axios.get(`${BACK_URL}/coupons`);
    console.log(response.data); // Обработка успешного ответа от сервера
    return response.data;
  } catch (error) {
    console.error(error); // Обработка ошибок
  }
};

export const getCurrentCouponAPI = async (code) => {
  try {
    const response = await axios.get(`${BACK_URL}/coupons/${code}`);
    console.log(response.data); // Обработка успешного ответа от сервера
    return response.data;
  } catch (error) {
    console.error(error); // Обработка ошибок
  }
};

// return [
//   {
//     id: 101,
//     title: "test1",
//     description:
//       "description description description description description",
//     price: 100,
//   },

//   {
//     id: 102,
//     title: "test2",
//     description:
//       "description description description description description",
//     price: 100,
//   },

//   {
//     id: 103,
//     title: "test3",
//     description:
//       "description description description description description",
//     price: 100,
//   },
//   {
//     id: 104,
//     title: "test4",
//     description:
//       "description description description description description",
//     price: 100,
//   },

//   {
//     id: 105,
//     title: "test5",
//     description:
//       "description description description description description",
//     price: 100,
//   },

//   {
//     id: 106,
//     title: "test6",
//     description:
//       "description description description description description",
//     price: 100,
//   },
// ];
// };
