# Messenger App

## Description
A basic Messenger App built as part of a technical assignment. This project demonstrates the ability to create a simple, interactive messaging interface using React. It includes core functionalities like sending messages, switching chats between friends, and displaying notifications with badges for unread messages.


---

## Features

### Core Features:
1. **Real-time Messaging:** Users can type and send messages in the chat window.
2. **Friend Selection:** Users can select a friend from the friend list to view and participate in their chat.
3. **Dynamic Chat View:** The chat window updates dynamically as messages are sent.
4. **Friend Priority:** The currently active friend is moved to the top of the friend list upon message exchange.
5. **Keyboard Support:** Pressing the "Enter" key sends the message.

---

## Technology Stack

1. **Frontend**:
   - React (Functional Components, Hooks)
   - CSS (for styling)

2. **Tooling**:
   - Parcel Bundler (for building and serving the app)
   - NPM/Yarn for dependency management


---

## Installation and Setup

Follow these steps to setup the project locally

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/gayathritalasila/MessengerApp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MessengerApp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at:
   ```
   http://localhost:1234
   ```

### Build for Production
To create a production build, run:
```bash
npm run build
```

---

## File Structure

```
.
├── src
│   ├── components
│   │   ├── FriendList.js
│   │   ├── ChatWindow.js
│   ├── App.js
│   ├── app.css
├── index.html
│
├── package.json
└── README.md
```

### Key Files:
1. **App.js**: Manages state, handles friend selection, message sending, and renders the UI.
2. **FriendList.js**: Displays the list of friends with the ability to show notification badges.
3. **ChatWindow.js**: Renders the chat window and handles input for sending messages.
4. **app.css**: Styles for the application.

---

## Usage Instructions

1. **Select a Friend:** Click on a friend from the friend list to open their chat.
2. **Send a Message:**
   - Type a message in the input box.
   - Press "Enter" or click the "Send" button to send the message.

---
