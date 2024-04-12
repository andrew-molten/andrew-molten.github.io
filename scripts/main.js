//////////////////////////////////////////////////////////////////////////////
//////////////////// HIDE OR SHOW BLOG POST IMAGES ///////////////////////////
//////////////////////////////////////////////////////////////////////////////

const coreBlogPosts = document.getElementById('core-blog-posts').children
const techBlogPosts = document.getElementById('tech-blog-posts').children
const templateBlogPosts = document.getElementById(
  'template-blog-posts'
).children
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

// ///////////////////// Quick find //////////////

// When clicked it needs to display a menu
// const quickFindBtn = document.getElementById('quick-find')
const topNav = document.getElementById('topnav')
const header = document.querySelector('.heading-container')
topNav.addEventListener('click', openNavMenu)

// sort height of button
// const headerHeight = header.clientHeight
// const styleSheet = document.querySelector(`link[href*="main.css"]`).sheet
// const leftOrRight =
//   screen.width > 600 ? 'left: 1em;' : 'right: 1em; text-align: right'
// console.log(screen.width)
// styleSheet.insertRule(
//   `.topnav{position: absolute;top: ${headerHeight - 120}px;${leftOrRight}}`,
//   styleSheet.cssRules.length
// )

function openNavMenu() {
  topNav.classList.toggle('topnav-clicked')
  topNav.classList.contains('topnav-clicked')
    ? generateNavMenuMarkUp()
    : (topNav.innerHTML = '<p id="quick-find">Posts</p>')
}

function generateNavMenuMarkUp() {
  generateBlogPostList('Tech')
  generateBlogPostList('Core')
  generateBlogPostList('Templates')
}

function generateBlogPostList(label) {
  topNav.innerHTML += `<br/><a class="nav-heading">${label}<a>`
  let blogPosts
  if (label == 'Tech') blogPosts = techBlogPosts
  if (label == 'Core') blogPosts = coreBlogPosts
  if (label == 'Templates') blogPosts = templateBlogPosts
  for (post of blogPosts) {
    const postTitle = post.querySelector('.blog-link-name').textContent
    const link = post.firstElementChild.href
    topNav.innerHTML += `<br/><a href="${link}">${postTitle}</a>`
  }
}

//when you click away it should disappear
