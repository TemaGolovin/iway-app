export interface TripsResponse {
  result:   Result;
  error:    null;
  "x-uuid": string;
}

export interface Result {
  orders:    Order[];
  page_data: PageData;
}

export interface Order {
  date_change:                       string;
  date:                              string;
  date_arrival:                      string;
  date_departure:                    null;
  order_id:                          number;
  user_id:                           number;
  order_type:                        number;
  transaction:                       number;
  payable_status:                    number;
  ex_order_status:                   number;
  service_id:                        number;
  duration:                          number;
  doer_city_id:                      number;
  allowable_time:                    number;
  cancellation_time:                 number;
  reward:                            number;
  booker_number:                     string;
  arrival_number:                    string;
  departure_number:                  string;
  table:                             string;
  notes:                             string;
  location_address:                  string;
  destination_address:               string;
  lang:                              Lang;
  allowable_subaddress:              number;
  coef_subaddress:                   number;
  subaddress:                        Subaddress[];
  send_params:                       SendParams;
  passengers:                        Passenger[];
  passengers_number:                 number;
  additional_address:                boolean;
  cancellation_time_without_penalty: Date;
  destination_address_object:        AtionAddressObject;
  location_address_object:           AtionAddressObject;
  car_data:                          CarData;
  currency:                          Currency;
  price:                             Price;
  additional_change_itinerary:       number;
  additional_wait:                   number;
  fare_on_toll_road:                 number;
  additional_payment_info:           null;
  meeting_point:                     null;
  internal_number:                   string;
  viewers:                           string[];
  coordinator:                       Coordinator;
  additional_services:               AdditionalService[];
  flexible_tariff:                   boolean;
  uuid:                              string | null;
  is_blocked_update:                 boolean;
  driver_data:                       DriverData | null;
  is_fast_booking:                   boolean;
  pos:                               null;
  platform:                          number;
  ffp_number:                        null;
  flexible_tariff_agreement:         boolean;
  children_amount:                   number;
  adults_amount:                     number;
  service_provider:                  ServiceProvider;
  cost_center:                       string | null;
  number:                            number | null;
  status:                            number;
  start_place:                       Place;
  finish_place:                      Place;
  customer:                          Customer;
  start_place_id:                    string | null;
  finish_place_id:                   string | null;
}

interface AdditionalService {
  id: number;
  additional_service_id: number;
  name: string;
  uid: string;
  uid_additional_service: string;
  price: number;
  category: string;
  coefficient: number;
  type: string;
}

export interface CarData {
  car_class_id: number;
  car_class:    string;
  models:       string;
  capacity:     number;
  photo:        string;
  deleted:      boolean;
  description:  string | null;
}

export interface Subaddress {
  address: string;
  geo_check: boolean;
  geo_data: GeoData;
}

export interface Coordinator {
  phone: string | null;
  name:  string | null;
}

export enum Currency {
  Rub = "RUB",
}

export interface Customer {
  name:  string;
  email: string;
  phone: string;
}

export interface AtionAddressObject {
  address:   string;
  geo_check: boolean | null;
  geo_data:  GeoData | null;
}

export interface GeoData {
  address_components: null[];
  formatted_address:  string;
  geometry:           Geometry;
  place_id:           string;
  plus_code?:         PlusCode;
  types:              null[];
  name?:              string;
}

export interface Geometry {
  location:       Location;
  location_type?: LocationType;
  viewport:       Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export enum LocationType {
  Rooftop = "ROOFTOP",
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface PlusCode {
  compound_code: string;
  global_code:   string;
}

export interface DriverData {
  driver_name:   string | null;
  driver_phone:  string;
  driver_car:    string | null;
  driver_rating: string | null;
  car_color:     null;
}

export interface Place {
  place_id:               number;
  title:                  string;
  type:                   number;
  type_title:             string;
  city_id:                number;
  city:                   string;
  terminal_number?:        string;
  train_carriage_number?: null;
}

export enum Lang {
  Ru = "ru",
}

export interface Passenger {
  name:       string;
  email:      string;
  phone:      string;
  company:    null;
  client_id:  number;
  company_id: null;
}

export interface Price {
  price_id:         number;
  price:            number;
  price_subaddress: null;
}

export interface SendParams {
  send_client_voucher: boolean;
  send_admin_voucher:  boolean;
  send_client_doc:     boolean;
  send_admin_doc:      boolean;
}

export interface ServiceProvider {
  id:      number;
  title:   string;
  deleted: boolean;
}

export interface PageData {
  page:          number;
  items_on_page: number;
  total_items:   number;
  page_count:    number;
}
