import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.query('question', {sortBy: 'postDate'}).then(questions => {
      return questions.toArray().reverse();
    });
  }

});
