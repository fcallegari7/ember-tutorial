import Component from '@glimmer/component';
import { type Rental } from '../../../types/common';

type RentalsFilterArgs = {
  rentals: Rental[];
  query: string;
}

export default class RentalsFilter extends Component<RentalsFilterArgs> {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}