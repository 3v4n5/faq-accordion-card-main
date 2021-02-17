// User options
new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
      console.log(currentElement);
    }
  });