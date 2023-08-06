import axios from "axios";

export const fetchData = async (pageParam: string) => {
  try {
    const response = await axios.get(
      `https://frontassignment.hyperhire.in?page=${pageParam}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
