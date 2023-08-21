const range = document.querySelector('.range')
const label = document.querySelector('.label')

range.addEventListener('input', (e) => {
  const value = +e.target.value

  label.textContent = value

  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  const label_width = getComputedStyle(label).getPropertyValue('width')

  const numRangewidth = parseInt(range_width)
  const numLabelWidth = parseInt(label_width)

  const max = +e.target.max
  const min = +e.target.min

  const left = value * (numRangewidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10)

  label.style.left = left + 'px'
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}