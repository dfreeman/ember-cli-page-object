import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('calculator');
  this.route('async-calculator');
  this.route('inputs');
});

export default Router;
