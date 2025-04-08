
# AI Travel Companion Chatbot

Welcome to the **AI Travel Companion Chatbot**! This is a conversational chatbot powered by **Google Gemini API** that helps you plan your travel. Whether you need suggestions for your next trip, hotel recommendations, or a custom itinerary, this chatbot is your personal travel assistant.

## Features

- **Travel Assistance**: Ask the AI about your travel preferences, destinations, and get personalized travel plans.
- **Real-Time Chat**: Engage in an interactive conversation with the bot to generate responses for your travel queries.
- **Quick Prompts**: Use pre-defined prompts to quickly ask about different aspects of your trip.
- **User-Friendly Interface**: A simple and intuitive UI that makes interacting with the chatbot seamless.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Axios for API calls
- **API**: Google Gemini (Generative Language API)
- **Deployment**: Local (or can be deployed to a platform like Netlify, Vercel, etc.)

## Installation

To get started with the project locally, follow these steps:

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (if not already installed).
2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/srishtayal/ai-travel-companion.git
   cd ai-travel-companion
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   Create a `.env` file in the root directory of your project and add the following:

   ```plaintext
   REACT_APP_API_KEY=your_google_api_key
   ```

   Replace `your_google_api_key` with your actual Google Gemini API key.

### Run the Project

After the dependencies are installed and the environment variables are set, you can start the project:

```bash
npm start
```

This will start the application on `http://localhost:3000`.

## Usage

1. **Interact with the chatbot**: Type your travel-related questions in the input box and hit Enter or click the send button to get a response.
2. **Quick Prompts**: Use predefined quick prompts like "Plan a trip to Paris", "Recommend hotels in London", etc.
3. **Send Media**: Attach images or files (optional) to enhance your query and get more personalized responses.
