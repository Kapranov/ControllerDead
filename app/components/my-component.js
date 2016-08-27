import Ember from 'ember';

export default Ember.Component.extend({
  myProp: 100,
  myService: Ember.inject.service(),
  myNewName: Ember.inject.service('myService')
});
