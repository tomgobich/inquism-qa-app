import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  tags: DS.attr(),
  user: DS.belongsTo('user')
});
