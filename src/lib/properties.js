
let properties = {
  padded: {"name": "padded", "type": "boolean", "desc": "Applies a set padding to the inside of the card.", "default": 'true'},
  // Avatar
  avatar: {"name": "avatar", "type": "string", "desc": "The URL of an avatar to display on the card."},
  avatarPosition: {
    "name": "avatarPosition", "type": "string", "desc": "The position and float of an avatar. `top`," +
    " `top-right`, and `center` are accepted options displaying the avatar in it's assigned place.", "default": 'top'
  },
  avatarShape: {
    "name": "avatarPosition", "type": "string", "desc": "The shape of an avatar. `circle` and" +
    " `square` are accepted options displaying the avatar style.", "default": 'circle'
  },
  // Image
  image: {"name": "image", "type": "string", "desc": "The URL of an image to display on the card."},
  imagePosition: {
    "name": "imagePosition", "type": "string", "desc": "The position of an image. `top`," +
    " `background`, and `center` are accepted options displaying the image in it's assigned place. `background` will" +
    " apply the image as the entire cards background fill.", "default": 'top'
  },
  // Content
  title: {"name": "title", "type": "string", "desc": "The card's title."},
  subtitle: {"name": "subtitle", "type": "string", "desc": "The card's subtitle."},
  description: {"name": "description", "type": "string", "desc": "The cards description or details."},
  // Actions
  actions: {"name": "actions", "type": "array", "desc": "An array of actions to provide actions on the card."},
  actionsPosition: {
    "name": "actionsPosition", "type": "string", "desc": "The position of the action buttons. `left`," +
    " and `center` are accepted options displaying the buttons in it's assigned place.", "default": 'left'
  }
};

 export default properties;
