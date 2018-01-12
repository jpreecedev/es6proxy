# Traffic Light Challenge
A traffic light can only have one of three states – red, amber, green. (Ok pedants technically this isn’t entirely accurate, but for the sake of the exercise it is). Its starting state is red.

We can represent this in an object –

```javascript
let lights = {
    possibleState: ['red', 'amber', 'green'],
    currentState: 'red'
};
```

By default in JavaScript we could modify this object maliciously and break the data that supports the correct usage of a traffic light.

The challenge, should you choose to accept it, is to use JavaScript Proxies to prevent this from happening and restrict any changes to its `currentState` to one of the values in the `possibleState` array.

Your proxy should throw a console warning if you attempt to set its `currentState` to any other colour.

It should also throw a warning if you try and access (get) any other property than its `currentState`, therefore essentially privatising the `possibleState` array.

You should have an element on the page that displays the `currentState` of the traffic light. When the traffic light’s `currentState` is changed to an acceptable value, fire a custom DOM event (that you can capture on the window for example), which will trigger the traffic light element to update to the new `currentState`.

Use the following code to create a custom event creator

```javascript
function createEvent(eventName) {
    const event = document.createEvent('CustomEvent');
    event.initEvent(eventName, true, true);
    return event;
}
```

You will have to change the `currentState` in the dev console, I hadn’t had time to factor in a better way to do this, sorry!

