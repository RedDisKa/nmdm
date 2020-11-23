import {
  Customer,
} from "types";
import axios from "axios";

const baseUrl = "http://104.154.103.21:8081/api/v1";

export const createCustomer = async (customer: Customer) => {
  try {
    const response = await axios.post<Customer>(`${baseUrl}/customer`, customer);
    return response.data;
  } catch (error) {
    throw error;
  }
};
