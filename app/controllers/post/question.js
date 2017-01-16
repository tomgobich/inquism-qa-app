import Ember from 'ember';

export default Ember.Controller.extend({

  question: '',
  tags: '',

  isPostQuestionValid: Ember.computed('isValidQuestion', 'isValidTags', function() {
    return this.get('isValidQuestion') && this.get('isValidTags') ? true : false;
  }),
  isValidQuestion: Ember.computed.gte('question.length', 6),
  isValidTags: true,
  tagsChanged: Ember.observer('tags', function() {
    let tags = this.get('tags').trim();
    let hashtagCount = (tags.match(/#/g) || []).length;
    let specialCharactersCount = (tags.match(/[$&+,:;=?@|'<>.-^*()%!]/) || []).length || 0;
    let spaceCount = (tags.match(/ /g) || []).length || 0;

    console.log({hashtagCount, specialCharactersCount, spaceCount});

    let isValid = hashtagCount < 4 && specialCharactersCount === 0 && spaceCount < 3 ? true : false;

    this.set('isValidTags', isValid);
  }),
  //
  // actions: {
  //
  //   postQuestion() {
  //     if (this.get('isValidQuestion')) {
  //       let question = this.get('question');
  //       let tags = this.get('tags');
  //
  //       tags = this._formatTags(tags);
  //       let uid = this.get('session.uid');
  //       let user = this.store.query('user', {user_id: uid});
  //       console.log(user.get('displayName'));
  //
  //       let newQuestion = this.store.createRecord('question', {question, tags, user: uid});
  //
  //       newQuestion.save().then(response => {
  //         console.log({response});
  //         this.set('responseMessage', `Thank you for your question! It was saved as ${response.get('id')}`);
  //         console.log(`Thank you for your question! It was saved as ${response.get('id')}`);
  //         this.set('question', '');
  //         this.set('tags', '');
  //       });
  //     } else {
  //       alert('Please ensure your question and tags are valid!');
  //     }
  //   }
  //
  // },
  //
  // _formatTags(tags) {
  //   return tags.split(' ');
  // }
  // 

});
