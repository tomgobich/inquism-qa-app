import DS from 'ember-data';


export default DS.Model.extend({
  uid: DS.attr(),
  username: DS.attr('string'),
  email: DS.attr('string'),
  avatar: DS.attr('string'),
  joinDate: DS.attr('date'),
  lastOnlineDate: DS.attr('date'),
  questions: DS.hasMany('question')
});
