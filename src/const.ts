export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const MAX_IMAGES_TO_RENDER_IN_OFFER = 6;

export const MAX_NEAR_PLACES_TO_RENDER = 3;

export const MAX_RATING = 5;

export const MAX_REVIEWS_TO_RENDER = 10;

export const URL_MARKER = '/img/pin.svg';

export const URL_MARKER_ACTIVE = '/img/pin-active.svg';

export enum AppRoute {
  Main = '',
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer'
};

export enum BookMarkButtonClass {
  PlaceCard = 'place-card',
  Offer = 'offer'
};

export enum CardClass {
  Cities = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places'
};

export enum MapClass {
  Cities = 'cities',
  Offer = 'offer'
};

export enum Rating {
  Perfect = 'perfect',
  Good = 'good',
  NotBad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly'
}
