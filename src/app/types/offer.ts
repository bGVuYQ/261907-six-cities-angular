type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
};

interface City {
  name: string;
  location: Location;
};

interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export interface Offer {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export interface LocationWithOffers {
  name: string;
  offers: Offer[];
}

export type OfferLocationInfo = Pick<Offer, 'id' | 'city' | 'location'>;
