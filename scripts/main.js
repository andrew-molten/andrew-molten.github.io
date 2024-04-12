//////////////////////////////////////////////////////////////////////////////
//////////////////// HIDE OR SHOW BLOG POST IMAGES ///////////////////////////
//////////////////////////////////////////////////////////////////////////////

const coreBlogPosts = document.getElementById('core-blog-posts')
const techBlogPosts = document.getElementById('tech-blog-posts')
const templateBlogPosts = document.getElementById('template-blog-posts')
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
  for (Element of posts.children) {
    Element.firstElementChild.children[0].classList.toggle('hide-image')
    Element.firstElementChild.children[2].classList.toggle('br-1em')
  }
}

// get pathname
// console.log(window.location.pathname)

//////////////////////////////////////////////////////////////////////////////
// /////////////////// CREATE BLOG-LINK CARDS //////////////////
//////////////////////////////////////////////////////////////////////////////

function createBlogLinkMarkup(blog) {
  const title = blog.title
  const link = blog.link
  const imageLink = blog.imageLink

  return `<div class="blog-link-card">
  <a href="${link}">
    <img
      src="${imageLink}"
      class="blog-link-img"
    />
    <br />
    <div class="blog-card-bg">
      <img
        src="images/sea-edge.png"
        class="sea-edge"
        alt="abstract colorful triangles"
      />
      <p class="blog-link-name">${title}</p>
    </div>
  </a>
</div>`
}

const blogLinks = {
  tech: {
    0: {
      title: 'CSS Positioning',
      link: '/blog/tech/html-css.html',
      imageLink: '/images/tech/html-css/css-position.jpg',
    },
    1: {
      title: 'JavaScript & the DOM',
      link: '/blog/tech/javascript-dom.html',
      imageLink: '/images/tech/javascript-dom/DOM.jpeg',
    },
    2: {
      title: 'Problem Solving',
      link: '/blog/tech/problem-solving.html',
      imageLink: '/images/index/blog-links/bouldering-man.jpeg',
    },
  },
  core: {
    0: {
      title: 'Identity & Values',
      link: '/blog/core/identity-values.html',
      imageLink: '/images/index/blog-links/identity.jpeg',
    },
    1: {
      title: 'Learning Plan',
      link: '/blog/core/learning-plan.html',
      imageLink: '/images/index/blog-links/learning-plan.jpeg',
    },
    2: {
      title: 'Emotional intelligence',
      link: '/blog/core/emotional-intelligence.html',
      imageLink: '/images/index/blog-links/emotional-intelligence.jpeg',
    },
    3: {
      title: 'Neuroplasticity',
      link: '/blog/core/neuroplasticity.html',
      imageLink: '/images/index/blog-links/neuroplasticity.jpeg',
    },
    4: {
      title: 'Te Whare Tapa Whā',
      link: '/blog/core/te-whare-tapa-wha.html',
      imageLink: '/images/core/te-whare-tapa-wha/te-whare-tapa-wha-link.jpg',
    },
  },
  templates: {
    0: {
      title: 'Te-houtaewa',
      link: '/blog/templates/te-houtaewa-template.html',
      imageLink: '/images/index/blog-links/Te%20houtaewa.jpg',
    },
  },
}

// go through object to create blog cards
function generateBlogLinkCards(object, div) {
  for (key of Object.keys(object)) {
    const markup = createBlogLinkMarkup(object[key])
    div.insertAdjacentHTML('beforeend', markup)
  }
}

generateBlogLinkCards(blogLinks.tech, techBlogPosts)
generateBlogLinkCards(blogLinks.core, coreBlogPosts)
generateBlogLinkCards(blogLinks.templates, templateBlogPosts)

//////////////////////////////////////////////////////////////////////////////
// /////////////////////////// NAV ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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
  if (label == 'Tech') blogPosts = blogLinks.tech
  if (label == 'Core') blogPosts = blogLinks.core
  if (label == 'Templates') blogPosts = blogLinks.templates

  for (key of Object.keys(blogPosts)) {
    const markup = createNavMarkup(blogPosts[key])
    topNav.innerHTML += markup
  }
}

function createNavMarkup(blog) {
  const title = blog.title
  const link = blog.link
  return `<br/><a href="${link}">${title}</a>`
}
