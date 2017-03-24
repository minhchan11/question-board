import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion(){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.sendAction('saveQuestion', params)
    }
  }
});
