import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  postDate: DS.attr('date'),
  isTopAnswer: DS.attr('boolean'),
  votes: DS.attr('number'),
  question: DS.belongsTo('question')
});
