import axios from "axios";

export const fetchData = async (api) => {
  try {
    const response = await axios.get(api);

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
