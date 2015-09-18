var component = document.querySelector('hence-poc');

suite('<hence-poc>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-poc says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-poc says, greetings Earthlings');
  });
});