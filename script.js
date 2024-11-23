document.getElementById('mathForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the form from refreshing the page

  const problem = document.getElementById('problem').value;
  let answer = 'Invalid Input';
  
  try {
    answer = eval(problem); // Using eval to evaluate the math expression entered by the user
  } catch (error) {
    answer = 'Error in calculation';
  }

  document.getElementById('answer').innerText = answer;
  document.getElementById('problem').value = ''; // Clear input field after submission
});

