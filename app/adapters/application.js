import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'ember-example/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.API_URL,
  namespace: 'api/v1',
});
