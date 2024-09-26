import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchTrips } from "@/store/slices/trips-slice";

import styles from "./trips.module.scss";
import { TripCard } from "./ui/trips-card";

export const Trips = () => {

  const dispatch = useAppDispatch();
  const { trips, loading, error } = useAppSelector((state) => state.trips);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  return (
    <main className={ styles.page__container }>
      <h1>Поездки</h1>
      { loading && <p>Загрузка...</p> }
      { trips && !loading && !error && trips.orders.map((trip) => (
        <div key={ trip.order_id } className={ styles.trip__card_wrapper }>
          <TripCard trip={ trip } />
        </div>
      )) }


    </main>
  );
};
