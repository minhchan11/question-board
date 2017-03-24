import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAns(answer){
      var params = {
        response: this.get('responseUpdate'),
        responder: this.get('responderUpdate'),
      };
      console.log(params);
      this.sendAction('updateAns', answer, params);
    },
    deleteAns(answer){
      this.sendAction('deleteAns', answer);
    }
  }
});
