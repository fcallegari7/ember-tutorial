import BaseRequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { JsonSuffixHandler } from 'super-rentals/utils/handlers';

interface RequestManagerArgs {
  use: any[];
}

export default class RequestManager extends BaseRequestManager {
  constructor(args: RequestManagerArgs) {
    super(args);
    this.use([JsonSuffixHandler, Fetch]);
  }
}
