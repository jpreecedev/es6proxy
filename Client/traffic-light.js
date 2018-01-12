export default class TrafficLight extends HTMLElement {
  static get selector () { return 'traffic-light' }

  connectedCallback () {
    window.addEventListener('TrafficLightChanged', event => {
      this.textContent = event.detail.currentState
    })
  }
}

window.customElements.define(TrafficLight.selector, TrafficLight)
