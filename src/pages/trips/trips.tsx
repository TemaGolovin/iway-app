import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchTrips } from "@/store/slices/trips-slice";

export const Trips = () => {

  const dispatch = useAppDispatch();
  const { trips, loading, error } = useAppSelector((state) => state.trips);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  return (
    <div>
      <h1>Trips</h1>
    </div>
  );
};
