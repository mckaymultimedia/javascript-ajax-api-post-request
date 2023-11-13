const apiUrl = 'https://api.example.com/endpoint'; // Replace with the actual API endpoint URL
const data = {
  param1: 'value1',
  param2: 'value2',
};

// Create a function to handle the AJAX request
const sendPostRequest = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Adjust the content type as needed
      },
      body: JSON.stringify(data), // Convert data to JSON format
    });

    if (!response.ok) {
      // Handle non-successful responses
      console.error('Error:', response.status, response.statusText);
      return;
    }

    const result = await response.json(); // Parse the response as JSON

    // Handle the result, which is now an object array
    console.log('Response:', result);
  } catch (error) {
    // Handle any exceptions or network errors
    console.error('Request failed:', error);
  }
};

// Call the function to send the POST request
sendPostRequest();
