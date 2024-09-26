import { ChangeEvent, useEffect, useState } from "react";
import { Pagination } from "antd";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchTrips } from "@/store/slices/trips-slice";
import { Input } from "@/shared";
import { useDebounce } from "@/hooks/useDebounce";

import styles from "./trips.module.scss";
import { TripCard } from "./ui/trips-card";

export const Trips = () => {

  const dispatch = useAppDispatch();
  const { trips, loading, error } = useAppSelector((state) => state.trips);

  const [searchParams, setSearchParams] = useState<{name?: string, email?: string} | null>(null);
  const [page, setPage] = useState(1);


  const debouncedEmail = useDebounce(searchParams?.email || "", 700);
  const debouncedName = useDebounce(searchParams?.name || "", 700);

  useEffect(() => {
    dispatch(fetchTrips({
      page,
      names: debouncedName,
      emails: debouncedEmail,
    }));
  }, [dispatch, page, debouncedEmail, debouncedName]);

  if (error) {
    return <p>{ error }</p>;
  }

  return (
    <main className={ styles.page__container }>
      <h1>Поездки</h1>
      <div className={ styles.trip_input__wrapper }>
        <Input
          id="searchForName"
          placeholder="Поиск по имени пассажира..."
          onChange={ (e: ChangeEvent<HTMLInputElement>) => setSearchParams({ ...searchParams, name: e.target.value }) }
        />
        <Input
          id="searchForEmail"
          placeholder="Поиск по email пассажира..."
          onChange={ (e: ChangeEvent<HTMLInputElement>) => setSearchParams({ ...searchParams, email: e.target.value }) }
        />
      </div>

      { loading && <p>Загрузка...</p> }
      { trips && !loading && !error && trips.orders
        .map((trip) => (
          <div key={ trip.order_id } className={ styles.trip__card_wrapper }>
            <TripCard trip={ trip } />
          </div>
        )) }

      { trips?.page_data && !error && <Pagination
        total={ trips.page_data.total_items }
        current={ page }
        pageSize={ trips.page_data.items_on_page }
        pageSizeOptions={ [ trips.page_data.page_count] }
        onChange={ (newPage) => setPage(newPage) }
      /> }
    </main>
  );
};
