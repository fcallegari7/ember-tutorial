import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';
import type Store from '@ember-data/store';

export default class IndexRoute extends Route {
  @service declare store: Store;

  async model(): Promise<any> {
    const { content } = await this.store.request(query('rental'));
    return content.data;
  }
}
