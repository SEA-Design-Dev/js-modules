require(['./greetings', './audience'], function(greetings, audience) {
  console.log(greetings.random() + audience());
});
