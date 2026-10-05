import axios from "axios";

const PIXABAY_KEY = import.meta.env.VITE_PIXEBEY_KEY;

const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchDataPics(query, page = 1, per_page = 20) {
  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: PIXABAY_KEY,
        q: query,
        page,
        per_page,
        image_type: "photo",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }
}

export async function fetchDataVideo(query, per_page = 15) {
  try {
    const response = await axios.get("https://pixabay.com/api/videos/", {
      params: {
        key: PIXABAY_KEY,
        q: query,
        per_page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }
}
export async function fetchDataGif(query, page,per_page = 15) {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: per_page,
        offset: (page - 1) * per_page,
        rating: "g",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }
}
