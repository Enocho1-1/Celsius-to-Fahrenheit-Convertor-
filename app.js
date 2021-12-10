document.querySelector('form').addEventListener('submit', function(e) {
  // Show loader
  document.querySelector('#loading').style.display = 'block';

  //Hide results
  document.querySelector('#results').style.display = 'none';

  setTimeout(calculatedResults, 2000);

  e.preventDefault();
});

function calculatedResults(){
  // Select elements from DOM
  const celsius = document.querySelector('#celsius');
  const fahrenheit = document.querySelector('#fahrenheit');

  // Celsius to Fahrenheit
  const convertFormula = (celsius.value * 1.8) + 32;
  
  // Check if celsius input empty
  if(celsius.value === ''){
    showError('Please check numbers');
  } else {
    fahrenheit.value = convertFormula;
    document.querySelector('#loading').style.display = 'none';

    document.querySelector('#results').style.display = 'block';
  }
}

function showError(x){
  // Create div
  const errorDiv = document.createElement('div');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Append text node to div
  errorDiv.appendChild(document.createTextNode(x));

  //Select elements
  const card = document.querySelector('div.card');
  const heading = document.querySelector('h1');

  card.insertBefore(errorDiv, heading);

  //Clear error
  setTimeout(clearError, 2000);
}

function clearError(){
  document.querySelector('#loading').style.display = 'none';
  document.querySelector('.alert').remove(); 
}