export type TicketType =
  | 'Early Bird'
  | 'Pre Sale'
  | 'Normal'
  | 'Booth'
  | 'Pre Event 3';

export type TicketData = {
  id: string;
  name: string;
  type: string;
  price: number;
  quota: number;
  dateOpen: string;
  dateClose: string;
  updatedAt: string;
  createdAt: string;
};

export type BookingStatus =
  | 'MENUNGGU_PEMBAYARAN'
  | 'MENUNGGU_VERIFIKASI'
  | 'TERVERIFIKASI';

export type BookingData = {
  id: string;
  orderingUser: string;
  status: BookingStatus;
  paymentProof: string;
  verificator: string;
  isActive: boolean;
  totalPrice: number;
  deadline: string;
};

export type BookingDataWithTicketName = {
  id: string;
  orderingUser: string;
  status: BookingStatus;
  paymentProof: string;
  verificator: string;
  isActive: boolean;
  totalPrice: number;
  deadline: string;
  bookingDetails: {
    ticket: {
      name: string;
    };
  }[];
};

export type BookingDetailData = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  qrLink: string;
  seatId: string;
  booking: Pick<BookingData, 'id' | 'status' | 'isActive'>;
  ticket: Pick<TicketData, 'id' | 'name' | 'price' | 'type'>;
  seat: Pick<SeatingData, 'name'>;
};

export type SeatingData = {
  id: string;
  name: string;
  BookingDetail: {
    id: string;
  } | null;
};

export type SeatingWithBookingDetailData = {
  id: string;
  name: string;
  BookingDetail: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    ticket: {
      name: string;
      type: string;
      price: number;
    };
  } | null;
};
