import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.sendAction('update', question, params);
    },
    delete(question){
      this.sendAction('delete', question);
    }
  }
});
