export type TicketCategoryValue = 'vip' | 'regular';
export type PaymentMethodValue = 'om' | 'visa';

export type DropdownTicketCategory = {
  id: string;
  label: string;
  value: TicketCategoryValue;
};

export type DropdownPaymentMethod = {
  id: string;
  label: string;
  value: PaymentMethodValue;
};
