const input = document.querySelector('#fruit'); //input = #fruit
const suggestions = document.querySelector('.suggestions ul');

const fruitList = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  let results = [];

  // Filter the fruit list based on user input
  results = fruitList.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
  //pass in str in the search function is being compared to items in fruitlist then it'll turn result if it matches

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value; //when a user types in an input in the search bar it'll capture its value to inputVal
  const results = search(inputVal); //passes in inputVal to search function to get results
  showSuggestions(results, inputVal); //shows matching variables and passes it into showSuggestion function
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; // Clear previous suggestions
  if (inputVal !== '') {
    results.forEach(result => {
      const li = document.createElement('li');    //if inputval not empty create a li
      li.textContent = result; // set li text to result
      suggestions.appendChild(li); // append li to suggestions
    });
    suggestions.parentElement.classList.add('has-suggestions');
  } else {
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') { //if a user click an LI
    input.value = e.target.textContent; //change the input text field to the LI.target
    suggestions.innerHTML = ''; //reset suggestion
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
