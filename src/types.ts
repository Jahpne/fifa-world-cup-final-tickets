export interface TicketListing {
  id: string;
  section: string;
  row: string;
  quantity: number;
  pricePerTicket: number;
  feesPerTicket: number;
  rating: number; // 1-10
  ratingLabel: string; // e.g., "Amazing", "Good"
  isBestDeal?: boolean;
}

export type Page = 'home' | 'listings' | 'checkout';
