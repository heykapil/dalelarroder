let e = 0

function n(e) {
  this.init(e || {})
}

n.prototype = {
  init: function (e) {
    this.phase = e.phase || 0
    this.offset = e.offset || 0
    this.frequency = e.frequency || 0.001
    this.amplitude = e.amplitude || 1
  },
  update: function () {
    return (this.phase += this.frequency), (e = this.offset + Math.sin(this.phase) * this.amplitude)
  },
  value: function () {
    return e
  },
}

const f = new n({
  phase: Math.random() * 2 * Math.PI,
  amplitude: 85,
  frequency: 0.0015,
  offset: 285,
})

export default f
