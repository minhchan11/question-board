import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAns(answer, params){
    this.sendAction('updateAns', answer, params);
  },
    deleteAns(answer){
      this.sendAction('deleteAns', answer);
    }
  }
});
