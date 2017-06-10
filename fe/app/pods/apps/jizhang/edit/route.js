import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let { edit_id: bill_id } = params;
    return { bill_id };
  }
});
