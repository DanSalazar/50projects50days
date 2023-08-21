const projects = [
  "3D-background-boxes",
  "animated-countdown",
  "animation-slider",
  "anim-nav",
  "autotext-effect",
  "blurry-animation",
  "button-ripple-effect",
  "clock",
  "collapse",
  "content-placeholder",
  "counter-anim",
  "custom-range-slider",
  "dad-jokes",
  "double-click-heart",
  "drag-drop",
  "drawing-app",
  "drink-water",
  "explanded-cards",
  "feedback-ui",
  "form-wave",
  "github-profile",
  "good-cheap-fast",
  "hoverboard",
  "image-carousel",
  "insert-catch-game",
  "key",
  "kinetic-loader",
  "live-user-filter",
  "mobile-tab-navigation",
  'movie-app',
  'nav-widget',
  'netflix-mobile-navigation',
  "notes-app",
  "password-generator",
  "password-strength-background",
  "pokedex",
  "progress-step",
  "quiz-app",
  "random-image-feed",
  "random-pick",
  "rotating-nav-document",
  "scroll-animation",
  "soundsboard",
  "split-landing",
  "sticky-navigation",
  "testimonial-box-switcher",
  "toast",
  "todo-list",
  "verify-account-ui",
  "vertical-slider",
]

const list = document.querySelector('.projects')

projects.forEach(p => {
  const li = document.createElement('li')

  li.innerHTML = `
    <i class="fa-solid fa-folder"></i>
    <a href="${p}/index.html">
      ${p}
    <a>`

  list.append(li)
})
