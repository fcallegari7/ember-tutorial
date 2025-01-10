import { service } from '@ember/service';
import Component from '@glimmer/component';
import RouterService from '@ember/routing/router-service';

type ShareButtonArgs = {
    text?: string;
    hashtags?: string;
    via?: string;
}

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButton extends Component<ShareButtonArgs> {
    @service declare router: RouterService;

    get currentURL() {
        return (new URL(this.router.currentURL, window.location.origin)).toString();
    }

    get shareURL() {
        let url = new URL(TWEET_INTENT);

        url.searchParams.set('url', this.currentURL);

        if (this.args.text) {
        url.searchParams.set('text', this.args.text);
        }

        if (this.args.hashtags) {
        url.searchParams.set('hashtags', this.args.hashtags);
        }

        if (this.args.via) {
        url.searchParams.set('via', this.args.via);
        }

        return url;
    }
}
