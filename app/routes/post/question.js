import Ember from 'ember';
import getOrCreateUser from '../../features/get-or-create-user/util';

export default Ember.Route.extend({

  // Reroute to signup if user is unauthenticated
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('auth.signup');
    }
  },

  model() {
  },

  actions: {
    postQuestion() {
      let question = this.controller.get('question');
      let tags = this.controller.get('tags');

      let newQuestion = this.store.createRecord('question', {question, tags});
      let uid = this.controller.get('session.uid');

      let user = getOrCreateUser(uid,
        this.get('session.currentUser.displayName'),
        this.get('session.currentUser.email'),
        this.get('session.currentUser.photoURL'),
        this.store);

      user.then(userData => {
        userData.get('questions').addObject(newQuestion);
        console.log('test');
        return newQuestion.save().then(() => {
                                    console.log('newQuestion saved successfully');
                                    return userData.save();
                                  })
                                  .catch(error => {
                                    console.log('newQuestion error:' + error);
                                    newQuestion.rollbackAttributes();
                                  })
                                  .then(() => {
                                    console.log('user saved successfully');
                                  })
                                  .catch(error => {
                                    console.log('user error: ' + error);
                                    user.rollbackAttributes();
                                  });
      });
    }
  }

});
