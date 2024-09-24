import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getTripsList } from "@/api/fetchers";


export const fetchTrips = createAsyncThunk(
  "trips/fetchTrips",
  async () => {
    const response = await getTripsList();
    return response.data;
  }
);

interface TripsState {
  trips: any[]; // TODO: fix type
  loading: boolean;
  error: string | null;
}

const initialState: TripsState = {
  trips: [],
  loading: false,
  error: null,
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.trips = action.payload;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const tripsReducer = tripsSlice.reducer;
