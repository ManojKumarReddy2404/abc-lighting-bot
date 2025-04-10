const fs = require('fs');

const dataset = JSON.parse(fs.readFileSync('./abc_dataset.json', 'utf8'));
const prompt = JSON.parse(fs.readFileSync('./chatbot_prompt.json', 'utf8'));

// Simulate response (basic keyword check)
function respond(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes('wall')) {
    const wallLight = dataset.products.find(p => p.name.includes('Wall'));
    return `${wallLight.name} is ${wallLight.dimensions}, lasts up to ${wallLight.battery_life}, and includes features like ${wallLight.features.join(', ')}. [Image](${wallLight.image_url})\n\nIs there anything else I can help you with?`;
  }

  if (input.includes('driveway')) {
    const light = dataset.products.find(p => p.name.includes('Driveway'));
    return `${light.name} is ${light.dimensions}, lasts up to ${light.battery_life}, and has: ${light.features.join(', ')}. [Image](${light.image_url})\n\nIs there anything else I can help you with?`;
  }

  if (input.includes('street')) {
    const light = dataset.products.find(p => p.name.includes('Street'));
    return `${light.name} is ${light.dimensions}, lasts up to ${light.battery_life}, and includes features: ${light.features.join(', ')}. [Image](${light.image_url})\n\nIs there anything else I can help you with?`;
  }

  if (input.includes('location') || input.includes('office')) {
    return `We have offices in:\n- ${dataset.company.locations[0].city}: ${dataset.company.locations[0].address}\n- ${dataset.company.locations[1].city}: ${dataset.company.locations[1].address}\n\nIs there anything else I can help you with?`;
  }

  if (input.includes('hours')) {
    return `Our business hours are:\n${Object.entries(dataset.company.business_hours).map(([day, hours]) => `${day}: ${hours}`).join('\n')}\n\nIs there anything else I can help you with?`;
  }

  if (input === 'no') {
    return `Thank you! Could you please provide your name and contact information so we can follow up?`;
  }

  return `I'm sorry, I didn’t understand that. Could you please rephrase?\n\nIs there anything else I can help you with?`;
}

// Run simulation with the current user prompt
console.log(respond(prompt.user));
