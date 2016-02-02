import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('decisions', function() {
    this.route('show', {
      path: ':decision_id'
    });
  });
});

export default Router;
