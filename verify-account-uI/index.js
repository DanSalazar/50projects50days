const digits = document.querySelectorAll('.digit')

digits.forEach((el, i) => {
	el.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9) {
      el.value = ''
      setTimeout(() => digits[i + 1]?.focus(), 0)
    } else if(e.key === 'Backspace') {
      setTimeout(() => digits[i - 1]?.focus(), 0)
    }
	})
})