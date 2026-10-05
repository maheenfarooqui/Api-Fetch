import { createSlice } from "@reduxjs/toolkit";

export const searchSLice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setactiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setresults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setloading(state, action) {
      ((state.loading = true), (state.error = null));
    },
    seterror(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setClear(state){
        state.results=[]
    }
  },
});

export const { setQuery, setactiveTab, setresults, setloading, seterror ,setClear} =
  searchSLice.actions;

export default searchSLice.reducer;
