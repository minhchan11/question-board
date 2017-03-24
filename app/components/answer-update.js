import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,
  actions: {
    updateAns(answer){
      var params = {
        response: this.get('responseUpdate'),
        responder: this.get('responderUpdate'),
      };
      $("#responderUpdate").val("");
      $("#responseUpdate").val("");
      this.set('formShow', false);
      this.sendAction('updateAns', answer, params);
    },
    showForm: function(){
      this.set('formShow', true);
    },
    hideForm: function(){
      this.set('formShow', false);
    },
    deleteAns(answer){
      this.sendAction('deleteAns', answer);
    }
  }
});
