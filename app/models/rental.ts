import Model, { attr } from '@ember-data/model';

type Location = {
  lat: number;
  lng: number;
}

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr('string')
  declare title: string;
  @attr('string')
  declare owner: string;
  @attr('string')
  declare city: string;
  @attr declare location: Location;
  @attr('string')
  declare category: string;
  @attr('string')
  declare image: string;
  @attr('number')
  declare bedrooms: number;
  @attr('string')
  declare description: string;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
