import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from '@ember-data/store';

export default class RentalRoute extends Route {
  @service declare store: Store;

  async model(params: { rental_id: string }): Promise<any> {
    const rental = await this.store.findRecord('rental', params.rental_id);
    return rental;
  }
}