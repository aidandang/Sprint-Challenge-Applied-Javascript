// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    const tabs = response.data;
    tabs.topics.forEach(tab => {
      topics.appendChild(createTab(tab)) 
    })
  })
  .catch(err => {
    console.log(err);
  })

// Create Tab component
const createTab = (tabData) => {
  
  // Create elements
  const tab = document.createElement('div');

  // Add styles and attributes
  tab.classList.add('tab');

  // Add content
  tab.textContent = tabData;

  return tab;
}
  