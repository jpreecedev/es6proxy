export default class TrafficLight extends HTMLElement {
  static get selector () { return 'traffic-light' }

  connectedCallback () {
    this._root = this

    window.addEventListener('TrafficLightChanged', event => {
      this._root.innerHTML = ''
      const span = document.createElement('span')
      span.innerText = event.detail.currentState

      this._root.appendChild(span)
    })
  }
}

window.customElements.define(TrafficLight.selector, TrafficLight)
