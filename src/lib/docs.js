import generateDoc from './generateDoc';

let docs = {
  basic1: ()=> generateDoc([
      'title'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "I'm Just A Title"
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="I'm Just A Title">
    </hence-card>
`),
  basic2: ()=> generateDoc([
      'title',
      'description'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "A title...",
      description: "And some content..."
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="A title..." description="And some content...">
    </hence-card>
    <hence-card title="A title...">
      <div class="description">
        And some content...
      </div>
    </hence-card>
`),
  basic3: ()=> generateDoc([
      'title',
      'subtitle',
      'description'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "A title...",
      subtitle: "... And Subtitle",
      description: "With some more content... With some more content... With some more content... With some more content..."
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="A title..."
                subtitle="... And Subtitle"
                description="With some more content... With some more content... With some more content... With some more content...">
    </hence-card>
    <hence-card title="A title..." subtitle="... And Subtitle">
      <div class="description">
        With some more content... With some more content... With some more content... With some more content...
      </div>
    </hence-card>
`),
  basic4: ()=> generateDoc([
      'title',
      'description',
      'actions'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "A title...",
      description: "With some more content... With some more content... With some more content... With some more content...",
      actions: [{
        label: 'Action 1',
        icon: 'home', // font awesome icon short code
        // float: 'right', // optional float control
        action: (model, e)=> {
          alert('Action activated!');
        }
      ]
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="Sample with Actions"
                description="With some more content... With some more content... With some more content... With some more content..."
                actions="{{actions}}"> <!-- When using this inside another component, pass an array -->
    </hence-card>
    <hence-card title="Sample with Actions">
      <div class="description">
        With some more content... With some more content... With some more content... With some more content...
      </div>
      <div class="actions">
        <button on-click="handleViaCustomEvent()">Action 1</button>
        <button on-click="handleViaCustomEvent()">Action 2</button>
        <button on-click="handleViaCustomEvent()">Action 3</button>
      </div>
    </hence-card>
`),
  image1: ()=> generateDoc([
      'title',
      'image',
      'imagePosition'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "I'm Just A Title",
      image: "http://lorempixel.com/250/150/nature"
      imagePosition: "background"
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="I'm Just A Title"
                image="http://lorempixel.com/250/150/nature"
                image-position="background">
    </hence-card>
`),
  image2: ()=> generateDoc([
      'title',
      'subtitle',
      'image',
      'description'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "I'm Just A Title",
      subtitle: "... And Subtitle",
      image: "http://lorempixel.com/250/150/nature",
      // No imagePosition defaults to 'top'
      description: "And some content..."
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="I'm Just A Title"
                subtitle="... And Subtitle"
                image="http://lorempixel.com/250/150/nature"
                description="And some content...">
    </hence-card>
`),
  image3: ()=> generateDoc([
      'title',
      'subtitle',
      'image',
      'imagePosition',
      'description'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      title: "I'm Just A Title",
      subtitle: "... And Subtitle",
      image: "http://lorempixel.com/250/150/nature",
      imagePosition: 'center',
      description: "And some content..."
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card title="A title..."
                subtitle="... And Subtitle"
                image="http://lorempixel.com/250/150/nature"
                image-position="center"
                description="With some more content... With some more content... With some more content... With some more content...">
    </hence-card>
`),
  advanced1: ()=> generateDoc([
      'padded',
      'title',
      'subtitle',
      'actions',
      'image'
    ],
    `
### JS Instansiation

The following example shows how to leverage this sample when generated by JS:

    let customEl = {
      padded: true,
      title: 'Padded example w/ actions',
      subtitle: 'Padded example w/ actions',
      actions: [{
        label: 'Action Name',
        icon: 'home', // font awesome icon short code
        // float: 'right', // optional float control
        action: (model, e)=> {
          alert('Action activated!');
        }
      ],
      image
    };

    // Dynamically bind
    let el = HenceCard.createElement(customEl);
    document.xyz.appendChild(el); // place your element where you desire

    // Shortcut method
    HenceCard.appendToElement(customEl,document.xyz);

### HTML Instansiation

The next sample shows how you can accomplish producing the sample declaritively through html:

    <hence-card padded="true" title="Padded example w/ actions" subtitle="Padded example w/ actions">
      <div class="description">
        With some more content... With some more content... With some more content... With some more content...
      </div>
      <div class="actions">
        <button on-click="handleViaCustomEvent()">Custom Action</button>
      </div>
    </hence-card>
`)
};

export default docs;