// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const javascript = response.data.articles.javascript;
    const bootstrap = response.data.articles.bootstrap;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;

    javascript.forEach(article => {
      cards.appendChild(createCard(article)) 
    })
    bootstrap.forEach(article => {
      cards.appendChild(createCard(article)) 
    })
    jquery.forEach(article => {
      cards.appendChild(createCard(article)) 
    })
    node.forEach(article => {
      cards.appendChild(createCard(article)) 
    })
  })
  .catch(err => {
    console.log(err);
  })

// Create Card component
const createCard = (articleData) => {
  
  // Create elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('img-container');
  const image = document.createElement('img');
  const span = document.createElement('span');

  // Create structure
  card.append(headline, author);
  author.append(imageContainer, span);
  imageContainer.appendChild(image);

  // Add styles and attributes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');
  image.setAttribute('src', articleData['authorPhoto']);

  // Add content
  headline.textContent = articleData['headline']
  span.textContent = `By ${articleData['authorName']}`;

  return card;
}
