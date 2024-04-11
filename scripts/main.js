const coreBlogPosts = document.getElementById('core-blog-posts').children

function hideBlogPostImages() {
  for (post of coreBlogPosts) {
    post.firstElementChild.children[0].classList += ' hide-image'
  }
}

// hideBlogPostImages()
