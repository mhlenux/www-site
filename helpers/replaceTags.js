/*
  We use this as a middleware for markdown parser to replace HTML tags to custom 
  (example for having responsive images and other css styles)  
*/

function useResponsiveImages(html, postName) {
  const images = html.match(/<img(.*?)>/g)
  if (!images) {
    return html
  }
  images.forEach((image) => {
    html = html.replace(image, replaceWithResponsive(image))
  })

  function replaceWithResponsive(image) {
    const origImage = parseImagePathFromTag(image) // /img/nuxt.jpg
    let replace = `src="${origImage}"`
    const generatedImage = require(`~/content/blog/${postName}/${origImage}`)
    replace = `src="${generatedImage.src}" srcset="${generatedImage.srcSet}"`

    const responsive = image
      .replace(/src="([^"]*)"/g, replace)
      .replace('>', '/>')
    // We are inserting our class from netlify CMS using existing alt
    return responsive.replace('alt="', 'class="')
  }

  function parseImagePathFromTag(tag) {
    return tag
      .match(/src="([^"]*)"/g)[0]
      .replace('src="', '')
      .replace('"', '')
  }
  return html
}

function replaceHeaders(html) {
  let replaced = html
  replaced = html.replace('<h1>', '<h1 class="title">')
  replaced = html.replace('<h2>', '<h2 class="title">')
  replaced = html.replace('<h3>', '<h3 class="title">')
  replaced = html.replace('<h4>', '<h4 class="title">')
  replaced = html.replace('<h5>', '<h5 class="title">')
  replaced = html.replace('<h6>', '<h6 class="title">')
  return replaced
}

/**
 * Replace tags in markdown parsed to html
 * @param {string} html
 * @param {string} postName
 */
export function replaceTags(html, postName) {
  let replaced = html
  replaced = useResponsiveImages(replaced, postName)
  replaced = replaceHeaders(replaced)
  return `<div class="content">${replaced}</div>`
}
