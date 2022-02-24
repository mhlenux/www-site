/* IMPORTANT! We only initialize this straight on navbar component, because DOM is not available */
const floatingNavBar = function() {
  if (process.client) {
    const navbar = document.querySelector('nav')

    const navbarHeight = navbar.offsetHeight

    const addClassOnScroll = () => navbar.classList.add('is-floating')
    const removeClassOnScroll = () => navbar.classList.remove('is-floating')

    // Always float on mobile
    if (window.innerWidth < 1024) {
      addClassOnScroll()
    }

    window.addEventListener('scroll', function() {
      // Always float on mobile

      if (window.innerWidth < 1024) {
        addClassOnScroll()
        return
      }

      if (window.scrollY >= navbarHeight) {
        addClassOnScroll()
      } else {
        removeClassOnScroll()
      }
    })
  }
}

export default floatingNavBar
