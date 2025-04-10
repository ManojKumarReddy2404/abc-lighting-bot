# 💡 ABC Lighting Chatbot

This is a **Postman-simulated ChatGPT customer service bot** for **ABC Lighting Company**, built using **local JSON data** and **custom product info**.

---

## 🛠️ What It Does

- Responds conversationally like a customer support rep.
- Shares **company info** (locations & business hours).
- Provides info on **3 solar lighting products**:
  - **Street Light**
  - **Driveway Light**
  - **Wall Light**
- Sends **image links** for each product.
- Follows up every reply with:
  > "Is there anything else I can help you with?"
- If the user says "**no**", the bot asks for their **contact info**.

---

## 🔍 Features

- ✅ Conversational AI (simulated using ChatGPT-like responses)
- ✅ Built fully on a **local JSON dataset**
- ✅ Runs locally using **Node.js + Express**
- ✅ Tested through **Postman**

---

## 📁 Folder Structure

abc_lighting_data.json/ 
├── abc_dataset.json # Main dataset with product and company info 
├── chatbot_prompt.json # User prompt examples 
├── response_simulator.js # Simulates the chatbot logic 
├── server.js # Express server handling chat requests 
├── package.json # NPM configuration 
├── package-lock.json # Dependency lock file 
└── README.md # This file

---

## 🚀 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
2. Start the Express server:
   ```bash
   node server.js
3. Open Postman:
 Choose POST method
URL: http://localhost:3000/chat
Body → raw → JSON
Example input:
{
 "message": "Tell me about your products"
}
4. Get your chatbot response and check the output:

{
  "response": "We offer solar-powered lights including Street Light, Driveway Light, and Wall Light. Would you like to know more about any of them?\n\nIs there anything else I can help you with?"
}

👤 Author
P. Manoj Kumar Reddy
Intern Assignment — April 2025
For ABC Lighting Company

🎥 Demo

Loom video:


Let me know once you've pushed this or if you want me to help generate a professional Loom script next!
