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

// ///////////////////// NAV //////////////

// When clicked it needs to display a menu
const topNav = document.getElementById('topnav')
const header = document.querySelector('.heading-container')
topNav.addEventListener('click', openNavMenu)

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
  let i = 0
  if (label == 'Tech') blogPosts = techBlogPosts
  if (label == 'Core') blogPosts = coreBlogPosts
  if (label == 'Templates') blogPosts = templateBlogPosts
  for (post of blogPosts) {
    const postTitle = post.querySelector('.blog-link-name').textContent
    const link = post.firstElementChild.href
    const imageLink = post.querySelector('.blog-link-img').src
    topNav.innerHTML += `<br/><a href="${link}">${postTitle}</a>`
    console.log(`${i}: {
      title: "${postTitle}",
      link: "${link}",
      imageLink: "${imageLink}",
    },`)
    i++
  }
}

// get pathname
// console.log(window.location.pathname)

// /////////////////// CREATE BLOG-LINK CARDS //////////////////

function createBlogLinkCard() {
  console.log('hi')
}

const blogLinks = {
  tech: {
    0: {
      title: 'CSS Positioning',
      link: 'http://localhost:5173/blog/tech/html-css.html',
      imageLink: 'http://localhost:5173/images/tech/html-css/css-position.jpg',
    },
    1: {
      title: 'JavaScript & the DOM',
      link: 'http://localhost:5173/blog/tech/javascript-dom.html',
      imageLink: 'http://localhost:5173/images/tech/javascript-dom/DOM.jpeg',
    },
    2: {
      title: 'Problem Solving',
      link: 'http://localhost:5173/blog/tech/problem-solving.html',
      imageLink:
        'http://localhost:5173/images/index/blog-links/bouldering-man.jpeg',
    },
  },
  core: {
    0: {
      title: 'Identity & Values',
      link: 'http://localhost:5173/blog/core/identity-values.html',
      imageLink: 'http://localhost:5173/images/index/blog-links/identity.jpeg',
    },
    1: {
      title: 'Learning Plan',
      link: 'http://localhost:5173/blog/core/learning-plan.html',
      imageLink:
        'http://localhost:5173/images/index/blog-links/learning-plan.jpeg',
    },
    2: {
      title: 'Emotional intelligence',
      link: 'http://localhost:5173/blog/core/emotional-intelligence.html',
      imageLink:
        'http://localhost:5173/images/index/blog-links/emotional-intelligence.jpeg',
    },
    3: {
      title: 'Neuroplasticity',
      link: 'http://localhost:5173/blog/core/neuroplasticity.html',
      imageLink:
        'http://localhost:5173/images/index/blog-links/neuroplasticity.jpeg',
    },
    4: {
      title: 'Te Whare Tapa Whā',
      link: 'http://localhost:5173/blog/core/te-whare-tapa-wha.html',
      imageLink:
        'http://localhost:5173/images/core/te-whare-tapa-wha/te-whare-tapa-wha-link.jpg',
    },
  },
  templates: {
    0: {
      title: 'Te-houtaewa',
      link: 'http://localhost:5173/blog/templates/te-houtaewa-template.html',
      imageLink:
        'http://localhost:5173/images/index/blog-links/Te%20houtaewa.jpg',
    },
  },
}
