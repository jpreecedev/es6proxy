import './traffic-light'

(() => {
  'use strict'

  const onTrafficLightsChanged = currentState => {
    const event = new CustomEvent('TrafficLightChanged', {
      detail: {
        currentState
      }
    })
    window.dispatchEvent(event)
  }

  let lights = {
    possibleState: ['red', 'amber', 'green'],
    currentState: 'red'
  }

  const handler = {
    get (target, name) {
      if (name === 'currentState') {
        return target[name]
      }
      console.warn(`Property "${name}" is not available`)
    },
    set (obj, prop, value) {
      const found = lights.possibleState.findIndex(x => x === value) > -1
      if (!found) {
        console.warn(`Could not find "${value}"`)
        return true
      }
      obj[prop] = value
      onTrafficLightsChanged(value)
      return true
    }
  }

  const proxy = new Proxy(lights, handler)
  proxy.currentState = 'red'

  window.trafficLights = proxy
})()
