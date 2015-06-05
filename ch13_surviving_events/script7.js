function triggerEvent(elem, event) {
  // fetches element data and reference to parent (for bubbling)
  var elemData = getData(elem),
      parent = elem.parentNode || elem.ownerDocument;

  // if the event name was passed as a string, creates an
  // event out of it
  if (typeof event === 'string') {
    event = { type:event, target:elem };
  }
  // normalizes event properties
  event = fixEvent(event);

  // if the passed element has a dispatcher, executes
  // the established handlers
  if (elemData.dispatcher) {
    elemData.dispatcher.call(elem, event);
  }

  // unless explicitly stopped, recursively calls the function to bubble
  // the event up the DOM
  if (parent && !event.isPropagationStopped()) {
    triggerEvent(parent, event);
  }

  // if at the top of the DOM, triggers the default action unless disabled
  else if (!parent && !event.isDefaultPrevented()) {
    var targetData = getData(event.target);

    // checks if the target has default action for this event
    if(event.target[event.type]) {
      // temporarily disables event dispatching on the target
      // because we've already executed the handler
      targetData.disabled = true;

      // executes any default action
      event.target[event.type]();

      // re-enables the event dispatching
      targetData.disabled = false;
    }
  }
}
