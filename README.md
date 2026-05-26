# HealthMate

HealthMate is a fully functional web application designed to help users manage their medicines and set reminders seamlessly. It leverages modern technologies to provide an intuitive and efficient user experience.

## Features

- **Medicine Management**: Add, update, and delete medicines with ease.
- **Reminders**: Set reminders for your medicines using the Twilio library for SMS notifications.
- **Authentication**: Secure and seamless login with Google OAuth integration.
- **User Dashboard**: Personalized dashboard to manage medicines efficiently.

## Technologies Used

### Backend
- **Node.js**: Handles server-side logic and APIs.
- **MongoDB**: Database for storing medicine data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JSON Web Tokens (JWT)**: Secure user authentication.
- **Bcrypt.js**: Password encryption for secure data storage.
- **Twilio**: For sending SMS reminders.

### Frontend
- **React.js**: User Interface library for building dynamic and responsive UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux**: State management for seamless application flow.
- **React Router DOM**: For navigation and routing.

### Additional Tools
- **Firebase**: Used for image storage.
- **Google OAuth**: For secure and easy user authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/praniiyadav/HealthMate
   ```

2. Navigate to the project directory:
   ```bash
   cd HealthMate
   ```

3. Install dependencies for both the backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../client
   npm install
   ```

4. Set up environment variables in `.env` files for both backend and frontend:
   - MongoDB connection string: `MONGO_URI`
   - JWT secret: `JWT_SECRET`
   - Twilio credentials: `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN`
   - Firebase configuration and Google OAuth keys.

5. Start the application:
   - Backend:
     ```bash
     cd api
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```

## Usage

1. Register or log in using your Google account.
2. Add medicines to your personalized list.
3. Set up reminders for taking your medicines.
4. Receive SMS notifications for your reminders.

## Folder Structure

```
HealthMate/
├── api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── client/
    ├── src/
    ├── components/
    ├── pages/
    ├── App.js
```

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Twilio** for SMS services.
- **Google OAuth** for secure authentication.
- **Firebase** for image storage.
- **Redux** for state management.
- **Tailwind CSS** for elegant and responsive UI.

---

Feel free to explore the [HealthMate](https://github.com/praniiyadav/HealthMate) repository and contribute to its development!

