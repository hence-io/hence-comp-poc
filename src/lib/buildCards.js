'use strict';
/**
 * @module hence-poc
 */
import fake from 'faker';

import _sample from 'lodash/collection/sample';

import docs from './docs';

/**
 * HencePoc Component
 * @constructor
 */
let buildCards = (target)=> {
  // Some common defaults
  let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur assumenda commodi' +
    ' cumque dolorem eaque eligendi id illum magnam nemo neque praesentium quam quas, saepe sequi soluta, tempore totam, voluptate?';

  let action = (model, e)=> {
    alert('Action activated!');
  };

  let image = 'http://lorempixel.com/250/150/nature';
  let avatar = 'http://lorempixel.com/100/100/people';

  //console.log('targets & docs', target, docs);

  HenceCard.appendElementTo({
    padded: true,
    title: 'Padded example w/ action',
    subtitle: 'Padded example w/ action',
    actions: [
      {
        label: 'Learn More',
        action
      }
    ],
    image,
    source: docs.advanced1()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions, middle image',
    subtitle: 'Example w/ actions, middle image',
    actions: [
      {
        label: 'Learn More',
        action
      }, {
        icon: 'share-square-o',
        float: 'right',
        action
      }, {
        icon: 'plus-square-o',
        float: 'right',
        action
      }
    ],
    image,
    imagePosition: 'center',
    description,
    source: docs.advanced2()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions & avatar',
    subtitle: 'Example w/ actions & avatar',
    actions: [
      {
        label: 'Learn More',
        action
      }, {
        icon: 'share-square-o',
        float: 'right',
        action
      }, {
        icon: 'plus-square-o',
        float: 'right',
        action
      }
    ],
    actionsPosition: 'center',
    description,
    image,
    avatar,
    avatarShape: 'square',
    source: docs.advanced3()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions & avatar centered',
    subtitle: 'Example w/ actions',
    actions: [
      {
        label: 'Learn More',
        action
      }, {
        icon: 'share-square-o',
        float: 'right',
        action
      }, {
        icon: 'plus-square-o',
        float: 'right',
        action
      }
    ],
    image,
    avatar,
    avatarPosition: 'center',
    source: docs.advanced4()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions, background image',
    actions: [
      {
        label: 'Learn More',
        action
      }, {
        icon: 'share-square-o',
        float: 'right',
        action
      }, {
        icon: 'plus-square-o',
        float: 'right',
        action
      }
    ],
    actionsPosition: 'center',
    description,
    image,
    imagePosition: 'background',
    source: docs.advanced5()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions, background image',
    actions: [
      {
        label: 'Learn More',
        action
      }, {
        icon: 'share-square-o',
        float: 'right',
        action
      }, {
        icon: 'plus-square-o',
        float: 'right',
        action
      }
    ],
    description,
    image,
    imagePosition: 'background',
    avatar,
    avatarShape: _sample(['square', 'circle']),
    source: docs.advanced6()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Icon filled actions, no label',
    actions: [
      {
        icon: 'home',
        action
      }, {
        icon: 'search',
        action
      }, {
        icon: 'google-plus',
        float: 'right',
        action
      }, {
        icon: 'facebook',
        float: 'right',
        action
      }, {
        icon: 'twitter',
        float: 'right',
        action
      }, {
        icon: 'pinterest',
        float: 'right',
        action
      }
    ],
    description,
    source: docs.advanced7()
  }, target.advanced);
};

export default buildCards;
