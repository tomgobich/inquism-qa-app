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
  })

});
