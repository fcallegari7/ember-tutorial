import Store from '@ember-data/store';

declare module '@ember-data/store' {
  export default interface Store {
    request: (query: any) => Promise<{ content: { data: any } }>;
  }
}