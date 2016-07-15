import app from 'ampersand-app';
import BaseView from './base-view';
import ExperimentRowView from './experiment-row-view';


export default BaseView.extend({
  template: `<div class="card-list experiments"></div>`,

  props: {
    hasAddon: 'boolean'
  },

  render() {
    BaseView.prototype.render.apply(this, arguments);
    this.experimentList = this.renderCollection(
      app.experiments,
      ExperimentRowView,
      this.query('.experiments'), {
        viewOptions: {
          hasAddon: this.hasAddon
        }
      }
    );
  },

  remove() {
    BaseView.prototype.remove.apply(this, arguments);
  }
});
