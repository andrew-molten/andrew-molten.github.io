const coreBlogPosts = document.getElementById('core-blog-posts').children
const techBlogPosts = document.getElementById('tech-blog-posts').children

function hideBlogPostImages(posts) {
  for (Element of posts) {
    Element.firstElementChild.children[0].classList += ' hide-image'
  }
}

function showBlogPostImages(posts) {
  for (Element of posts) {
    Element.firstElementChild.children[0].classList -= ' hide-image'
  }
}

// hideBlogPostImages(coreBlogPosts)
// hideBlogPostImages(techBlogPosts)
// showBlogPostImages(techBlogPosts)
