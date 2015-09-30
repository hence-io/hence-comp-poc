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
    description,
    source: docs.advanced2()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions & avatar',
    subtitle: 'Example w/ actions & avatar',
    actions: [action(), action(), action()],
    actionsPosition: 'center',
    description,
    image,
    avatar,
    avatarShape: _sample(['square', 'circle']),
    source: docs.advanced3()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions & avatar centered',
    subtitle: 'Example w/ actions',
    actions: [action(), action(), action()],
    image,
    avatar,
    avatarPosition: 'center',
    avatarShape: _sample(['square', 'circle']),
    source: docs.advanced4()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions, background image',
    actions: [action(), action(), action()],
    actionsPosition: 'center',
    description,
    image,
    imagePosition: 'background',
    source: docs.advanced5()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Example w/ actions, background image',
    actions: [action(), action(), action()],
    description,
    image,
    imagePosition: 'background',
    avatar,
    avatarShape: _sample(['square', 'circle']),
    source: docs.advanced6()
  }, target.advanced);

  HenceCard.appendElementTo({
    title: 'Icon Filled Actions',
    actions: [
      {
        icon: 'home', // font awesome icon short code
        action: (model, e)=> {
          alert('Action activated!');
        }
      }, {
        icon: 'facebook', // font awesome icon short code
        float: 'right',
        action: (model, e)=> {
          alert('Action activated!');
        }
      }, {
        icon: 'twitter', // font awesome icon short code
        float: 'right',
        action: (model, e)=> {
          alert('Action activated!');
        }
      }
    ],
    description,
    source: docs.advanced7()
  }, target.advanced);
};

export default buildCards;
