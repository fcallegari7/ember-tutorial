import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Rentals extends Component {
  @tracked query = '';

  @action
  updateQuery(event: Event) {
    let formData = new FormData(event.currentTarget as HTMLFormElement);
    this.query = formData.get('rental-search-term') as string;
  }

  @action
  handleSubmit(event: Event) {
    event.preventDefault();
    this.updateQuery(event);
  }
}