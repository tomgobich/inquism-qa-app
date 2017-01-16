import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', function() {
    this.route('signup');
    this.route('login');
  });

  this.route('post', function() {
    this.route('question', function() {});
  });

  this.route('question', {path: '/question/:questionID'});
});

export default Router;
