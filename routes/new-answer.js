Forum.NewAnswerRoute = Ember.Route.extend({
  model: function(params) {
    var question = this.modelFor('question');
    var answer = this.store.createRecord('answer');
    question.get('answers').then(function(answers) {
      answers.pushObject(answer);
      alert("hoo")
    });
    return answer;
  }
});
