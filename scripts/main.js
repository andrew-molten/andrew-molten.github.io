//////////////////////////////////////////////////////////////////////////////
///////////////////////// BLOG LINKS OBJECT //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////
//////////////////// HIDE OR SHOW BLOG POST IMAGES ///////////////////////////
//////////////////////////////////////////////////////////////////////////////

const coreBlogPosts = document.getElementById('core-blog-posts')
const techBlogPosts = document.getElementById('tech-blog-posts')
const templateBlogPosts = document.getElementById('templates-blog-posts')
const hideTechBtn = document.getElementById('hide-tech-images')
const hideCoreBtn = document.getElementById('hide-core-images')

// //////////////// INDEX EVENT LISTENERS /////////////////////////

function checkIfIndex() {
  return (
    window.location.pathname == '/' || window.location.pathname == '/index.html'
  )
}

if (checkIfIndex()) {
  hideTechBtn.addEventListener('click', hideCoreOrTechImages)
  hideCoreBtn.addEventListener('click', hideCoreOrTechImages)
}

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

//////////////////////////////////////////////////////////////////////////////
// /////////////////// CREATE BLOG-LINK CARDS //////////////////
//////////////////////////////////////////////////////////////////////////////

function generateBlogLinkCards(object, div) {
  for (key of Object.keys(object)) {
    const markup = createBlogLinkMarkup(object[key])
    div.insertAdjacentHTML('beforeend', markup)
  }
}

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

//////////////////////////////////////////////////////////////////////////////
// /////////////////////////// NAV ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const topNav = document.getElementById('topnav')
const bottomNav = document.getElementById('bottom-nav')
const header = document.querySelector('.heading-container')
const navBtn = document.querySelector('.nav-btn')
// checkIfIndex()
//   ? topNav.addEventListener('click', openNavMenu)
//   : bottomNav.addEventListener('click', openNavMenu)
navBtn.addEventListener('click', openNavMenu)

// Next step is to add this to all the other pages, and the template.
// Figure out why bottom-nav is appearing half way up the page

function openNavMenu() {
  navBtn.classList.toggle('navbtn-clicked')
  navBtn.classList.contains('navbtn-clicked')
    ? generateNavMenuMarkUp()
    : (navBtn.innerHTML = '<p id="nav-btn-p">Posts</p>')
}

function generateNavMenuMarkUp() {
  // const indexPostOrder = ['tech', 'core', 'templates']
  // checkIfIndex() ? '' : indexPostOrder.reverse()
  // for (subject of indexPostOrder) {
  //   generateBlogPostList(subject)
  // }
  navBtn.innerHTML += `<br/><a href="/" class="nav-home-link">Home<a>`
  generateBlogPostList('tech')
  generateBlogPostList('core')
  generateBlogPostList('templates')
}

function generateBlogPostList(subject) {
  const label = subject[0].toUpperCase() + subject.slice(1)
  // let markup = `<br/><a class="nav-heading">${label}<a>`
  navBtn.innerHTML += `<br/><br/><a class="nav-heading">${label}<a>`
  // topNav.insertAdjacentHTML(
  //   'afterbegin',
  //   `<br/><a class="nav-heading">${label}<a>`
  // )
  for (key of Object.keys(blogLinks[subject])) {
    const markup = createNavMarkup(blogLinks[subject][key])
    // markup += title
    // topNav.insertAdjacentHTML('afterbegin', markup)
    navBtn.innerHTML += markup
  }
  // topNav.insertAdjacentHTML('afterbegin', markup)
}

function createNavMarkup(blog) {
  const title = blog.title
  const link = blog.link
  return `<br/><a href="${link}">${title}</a>`
}

function init() {
  if (checkIfIndex()) {
    generateBlogLinkCards(blogLinks.tech, techBlogPosts)
    generateBlogLinkCards(blogLinks.core, coreBlogPosts)
    generateBlogLinkCards(blogLinks.templates, templateBlogPosts)
  }
}

init()
