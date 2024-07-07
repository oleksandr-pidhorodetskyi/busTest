export type BusType = {
  id: string;
  from: string;
  to: string;
  seats: SeatType[];
};

export type SeatType = {
  id: string;
  title: string;
  status: SeatStatus;
};

export enum SeatStatus {
  'reserved' = 'reserved',
  'available' = 'available',
}
