import { FC } from "react";
import { Collapse } from "antd";

import { Order } from "@/api/api-types";

import styles from "./trip-card.module.scss";
import { TripsHeader } from "../trips-header";

interface TripCardProps {
  trip: Order
}

const processingStatus = ["Ожидание обработки", "Обработка", "Принято", "Завершённый", "Отменено без штрафа", "Отменено со штрафом", "Неоплаченный", "Измененный"];

export const TripCard: FC<TripCardProps> = ({ trip }) => {
  return (
    <Collapse
      size="middle"
      items={ [{
        key: trip.order_id,
        label: <TripsHeader trip={ trip } />,
        children: (
          <section key={ trip.order_id }>
            <div className={ styles.top_info__wrapper }>
              <div className={ styles.trip__status }>
                Статус заказа: <strong className={ styles.strong }>{ processingStatus[trip.status] }</strong>
              </div>
              <div className={ styles.trip__status }>
                Количество пассажиров: <strong className={ styles.strong }>{ trip.passengers_number }</strong>
              </div>
            </div>
            <div className={ styles.points__wrapper }>

              <div className={ styles.start__point }>
                <span className={ styles.point_date }>
                  { trip.date_change }
                </span>
                <div className={ styles.location__point }>
                  { trip.location_address }
                </div>
              </div>
              ......
              <div className={ styles.finish__point }>
                <span className={ styles.point_date }>
                  { trip.date_arrival }
                </span>
                <div className={ styles.location__point }>

                  { trip.destination_address }
                </div>

              </div>
            </div>
          </section>
        ),
      }] }
    />

  );
};
