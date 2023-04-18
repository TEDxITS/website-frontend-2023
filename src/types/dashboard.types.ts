export type TicketType = 'Early Bird' | 'Pre Sale' | 'Normal';

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

export type BookingDetailData = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  qrLink: string;
  ticket: Pick<TicketData, 'id' | 'name' | 'price' | 'type'>;
};
