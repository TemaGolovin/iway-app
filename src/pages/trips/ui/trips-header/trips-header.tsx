import { FC } from "react";

import { Order } from "@/api/api-types";

import styles from "./trips-header.module.scss";

interface TripsHeaderProps {
  trip: Order;
}
export const TripsHeader: FC<TripsHeaderProps> = ({ trip }) => {
  return (
    <div className={ styles.header__wrapper }>
      <div>
        <div>
          { trip.number && <span>Поездка <strong className={ styles.strong }>№{ trip.number }</strong></span> }
        </div>

        <div>
          { trip.date_arrival && (
            <span>Дата прибытия:
              <strong className={ styles.strong }> { trip.date_arrival }</strong>
            </span>
          ) }
        </div>
      </div>
      <div>
        Маршрут: <strong className={ styles.strong }>{ trip.start_place.title } - { trip.finish_place.title }</strong>
      </div>
    </div>
  );
};
