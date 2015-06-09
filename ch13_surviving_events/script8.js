function isEventSupported(eventName) {
  // create a new <div> element that we'll perform tests upon
  // we'll delete it later
  var element = document.createElement('div'),
      isSupported;

  // tests if the event is supported by checking if a property
  // supporting the event is present in the element
  eventName = 'on' + eventName;
  isSupported = (eventName in element);

  // if the simple approach fails, creates an event-handler attribute
  // and checks if it 'sticks'
  if(!isSupported) {
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] == 'function';
  }

  // regardless of the result, wipes out the temporary element
  element = null;

  return isSupported;
}
