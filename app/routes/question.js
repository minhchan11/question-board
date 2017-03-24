import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    delete(question){
      var deletedAnswers = question.get('answers').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(deletedAnswers).then(function(){
        question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var thisQuestion = params.question;
      thisQuestion.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return thisQuestion.save();
      });
      this.transitionTo('question', thisQuestion);
    },
    updateAns(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },
    deleteAns(answer) {
      answer.destroyRecord();
    }
  }
});
