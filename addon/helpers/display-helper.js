import Ember from 'ember';

var get = Ember.get;

function displayHelper(params, hash) {
  var context = params[0], searchPath = params[1];
  return new Ember.Handlebars.SafeString(get(context, searchPath));
}

export default Ember.Helper.helper(displayHelper);
