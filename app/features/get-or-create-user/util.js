import Ember from 'ember';

const {RSVP: {Promise}} = Ember;

export default function getOrCreateUser(uid, username, email, avatar, store) {

  return new Promise(resolve => {
    store.query('user', {orderBy: 'uid', equalTo: uid}).then(records => {
      if(records.get('length') === 0) {
        resolve(store.createRecord('user', {uid, username, email, avatar}));
      }
      else {
        resolve(records.get('firstObject'));
      }
    });
  });

}