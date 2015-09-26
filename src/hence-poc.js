'use strict';
/**
 * @module hence-poc
 */
import fake from 'faker';
import Hence from 'hence-component-framework';

import _sample from 'lodash/collection/sample';
import _map from 'lodash/object/mapValues';

import docs from './lib/docs';
import buildCards from './lib/buildCards';

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
    selectedTab: {
      type: String,
      value: 0
    },
    docs: {
      type: Object
    }
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
    this.docs = _map(docs, f => f());
    //console.log('this.docs',this.docs);
  },

  /**
   * `attached` fires once the element and its parents have been inserted  into a document. This is a good place to
   * perform any work related to your element's visual state or active behavior (measuring sizes, beginning animations,
   * loading resources, etc).
   */
    attached() {
    this.async(this._buildCards);
  },

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

    _buildCards() {
    let {$, $$} = this;

    let target = {
      basic: $.basicCards,
      advanced: $.advancedCards,
      image: $.imageCards,
      user: $.userCards,
      product: $.productCards,
      event: $.eventCards,
      useCase: $.userCaseCards
    };

    buildCards(target);
  }
});

export default HencePoc;
