'use strict';
/**
 * @module hence-poc
 */
import console from 'consoler';
import Hence from 'hence-component-framework';

/**
 * HencePoc Component
 * @constructor
 */
let HencePoc = Hence.Ui({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-poc',
  properties: {
  },

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/

  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/

  /**
   * This is called after all elements have been configured, but propagates bottom-up. This element's children are
   * ready, but parents are not. This is the point where you should make modifications to the DOM (when  necessary),
   * or kick off any processes the element wants to perform.
   */
  ready() {
    // WARNING, updating DOM elements HERE may override variable revisions in the factoryImpl function if created
    // with the createElement function,leveraging the components defaults instead. If the element is embedded, no issue.
    let self = this;
    let {$, $$} = self;

    // Access a local DOM element by ID using self.$
    // $.greeting.textContent += ", has loaded!";

    // Access a local DOM element by selector using self.$$('')
    // $$('#greeting').textContent += ", has loaded!";
  },

  /**
   * `attached` fires once the element and its parents have been inserted  into a document. This is a good place to
   * perform any work related to your element's visual state or active behavior (measuring sizes, beginning animations,
   * loading resources, etc).
   */
  attached() {
    // WARNING, updating DOM elements HERE may override variable revisions in the factoryImpl function if created
    // with the createElement function,leveraging the components defaults instead. If the element is embedded, no issue.
    let self = this;
    let {$, $$} = self;

    // Access a local DOM element by ID using self.$
    // $.greeting.textContent += ", has loaded!";

    // Access a local DOM element by selector using self.$$('')
    // $$('#greeting').textContent += ", has loaded!";

    self.async(function() {
      // access sibling or parent elements here
    });
  },

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

});

export default HencePoc;
