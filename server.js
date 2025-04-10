const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Load dataset from abc_dataset.json
const dataset = JSON.parse(fs.readFileSync('./abc_dataset.json', 'utf8'));

app.post('/chat', (req, res) => {
  const userMessage = req.body.user.toLowerCase();
  
  // debug logs
  
  console.log("User message:", userMessage);
  console.log("Product data:", dataset.products);

  let response = '';

  if (userMessage.includes('street')) {
    response = dataset.products[0].description;
  } else if (userMessage.includes('driveway')) {
    response = dataset.products[1].description;
  } else if (userMessage.includes('wall')) {
    response = dataset.products[2].description;
  } else if (userMessage.includes('business hours')) {
    response = dataset.companyInfo.businessHours;
  } else if (userMessage.includes('location')) {
    response = dataset.companyInfo.locations.join(", ");
  } else if (userMessage.includes('no')) {
    response = "Great! Could you please share your contact information so we can follow up?";
  } else {
    response = "Hello! We offer solar-powered lights. How can I assist you today?";
  }

  response += "\n\nIs there anything else I can help you with?";
  res.json({ response });
});

app.listen(port, () => {
  console.log(`🤖 Chatbot API listening at http://localhost:${port}`);
});
