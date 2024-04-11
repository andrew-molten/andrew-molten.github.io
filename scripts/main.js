//////////////////////////////////////////////////////////////////////////////
//////////////////// HIDE OR SHOW BLOG POST IMAGES ///////////////////////////
//////////////////////////////////////////////////////////////////////////////

const coreBlogPosts = document.getElementById('core-blog-posts').children
const techBlogPosts = document.getElementById('tech-blog-posts').children
const hideTechBtn = document.getElementById('hide-tech-images')
const hideCoreBtn = document.getElementById('hide-core-images')

hideTechBtn.addEventListener('click', hideCoreOrTechImages)
hideCoreBtn.addEventListener('click', hideCoreOrTechImages)

function hideCoreOrTechImages(e) {
  e.target.id.slice(5, 9) == 'core'
    ? hideBlogPostImages(coreBlogPosts)
    : hideBlogPostImages(techBlogPosts)
}

function hideBlogPostImages(posts) {
  for (Element of posts) {
    Element.firstElementChild.children[0].classList.toggle('hide-image')
    Element.firstElementChild.children[2].classList.toggle('br-1em')
  }
}
