import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getTripsList } from "@/api/fetchers";
import { TripsResult } from "@/api/api-types";


export const fetchTrips = createAsyncThunk(
  "trips/fetchTrips",
  async (params: {page: number, names?: string, emails?: string})=> {
    const response = await getTripsList(params);
    return response;
  }
);

interface TripsState {
  trips: TripsResult | null;
  loading: boolean;
  error: string | null;
}

const initialState: TripsState = {
  trips: null,
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
        state.trips = action.payload.result;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const tripsReducer = tripsSlice.reducer;
