document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents the page from refreshing when the form is submitted
    
    const feedback = document.getElementById('feedback').value;  // Get the feedback from the user
    
    if (feedback.trim() !== '') {
      // Hide the form and show the thank you message
      document.getElementById('feedbackForm').style.display = 'none';  // Hide the form
      document.getElementById('thankYouMessage').style.display = 'block';  // Show the thank you message
    } else {
      alert('Please provide some feedback before submitting.');
    }
  
    // Optionally, clear the textarea after submission (you could also store it if needed)
    document.getElementById('feedback').value = '';
  });
  