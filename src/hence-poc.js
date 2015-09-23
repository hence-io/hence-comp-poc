'use strict';
/**
 * @module hence-poc
 */
import fake from 'faker';
import Hence from 'hence-component-framework';

import _sample from 'lodash/collection/sample';
import _map from 'lodash/object/mapValues';

import docs from './lib/docs';

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

    // Some common defaults
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur assumenda commodi' +
      ' cumque dolorem eaque eligendi id illum magnam nemo neque praesentium quam quas, saepe sequi soluta, tempore totam, voluptate?';

    let action = (label = true)=> {
      return {
        label: label ? fake.commerce.product() : '',
        icon: _sample(['apple', 'android', 'facebook', 'google', 'github', 'linux', 'rebel', 'steam', 'windows', '']),
        float: _sample(['', 'left', 'right']),
        action: (model, e)=> {
          alert('Action activated!');
        }
      };
    };

    let image = 'http://lorempixel.com/250/150/nature';
    let avatar = 'http://lorempixel.com/100/100/people';

    let target = {
      basic: $.basicCards,
      advanced: $.advancedCards,
      image: $.imageCards,
      user: $.userCards,
      product: $.productCards,
      event: $.eventCards
    };

    //console.log('targets & docs', target, docs);

    HenceCard.appendElementTo({
      padded: true,
      title: 'Padded example w/ actions',
      subtitle: 'Padded example w/ actions',
      actions: [action()],
      image,
      source: docs.advanced1()
    }, target.advanced);

    HenceCard.appendElementTo({
      title: 'Example w/ actions, middle image',
      subtitle: 'Example w/ actions, middle image',
      actions: [action(false), action(false)],
      image,
      imagePosition: 'center',
      description
    }, target.advanced);

    HenceCard.appendElementTo({
      title: 'Example w/ actions & avatar',
      subtitle: 'Example w/ actions',
      actions: [action(), action(), action()],
      actionsCentered: true,
      image,
      avatar,
      description,
      avatarShape: _sample(['square', 'circle'])
    }, target.advanced);

    HenceCard.appendElementTo({
      title: 'Example w/ actions & avatar centered',
      subtitle: 'Example w/ actions',
      actions: [action(), action(), action()],
      image,
      avatar,
      avatarPosition: 'center',
      avatarShape: _sample(['square', 'circle'])
    }, target.advanced);

    HenceCard.appendElementTo({
      title: 'Example w/ actions pre-opened, background image',
      image,
      imagePosition: 'background',
      actions: [action(), action(), action()],
      actionsPosition: 'center',
      description
    }, target.advanced);

    HenceCard.appendElementTo({
      title: 'Example w/ actions pre-opened, background image',
      image,
      imagePosition: 'background',
      avatar,
      avatarShape: _sample(['square', 'circle']),
      actions: [action(), action(), action()],
      description
    }, target.advanced);

    HenceCard.appendElementTo({
      title: 'Icon Filled Actions',
      actions: [action(false), action(false), action(false), action(false), action(false), action(false)],
      description
    }, target.advanced);
  }
});

export default HencePoc;
