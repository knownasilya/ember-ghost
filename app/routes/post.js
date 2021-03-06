import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  classNames: ["post-template"],


  model(params) {
    return hash({
      post:  this.store.queryRecord('content', {
        path: params.id,
      }),
      posts: this.store.query('content', {
        path: 'content',
      })
    }).then((result) => {
      return this.store.findRecord('author', get(result, 'post.author.id')).then(() => result);
    })
  },
});
