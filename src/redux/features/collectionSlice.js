import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};
export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyItem) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: () => {
      toast.success("Added to Favourite!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("Remove from Favourite!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addedToast,
  removeToast,
} = collectionSlice.actions;

export default collectionSlice.reducer;
