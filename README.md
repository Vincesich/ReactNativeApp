# React Native App

This is a React Native application that provides a simple user registration and login system with navigation functionalities and Redux state management.

## Features

- User registration and login functionalities.
- Usage of a react hook form
- Navigation using React Navigation.
- State management using Redux Toolkit.
- Fetching user data from an API.
- Displaying a list of registered users.

### Purpose

The primary purpose of this project is to provide a practical example of developing a mobile application using React Native, suitable for both beginners and experienced developers. By exploring the codebase and following the setup instructions provided in this README, developers can gain insights into building similar applications and learn best practices for structuring React Native projects, handling navigation, managing state, and more.

### Technologies Used

- **React Native**: A JavaScript framework for building native mobile apps using React.
- **Expo**: A framework and platform for universal React applications, providing tools for developing, building, and deploying React Native apps.
- **React Navigation**: A routing and navigation library for React Native apps, enabling seamless navigation between screens and handling navigation logic.
- **Redux Toolkit**: A comprehensive state management library for React applications, offering simplified setup and powerful features for managing application state.
- **AsyncStorage**: A built-in React Native module for storing data locally on the device, useful for persisting user data across app sessions.
- **React Query**: A data fetching library for React, offering tools for managing asynchronous data fetching and caching, used in conjunction with Redux Toolkit for fetching user data from an API.

  
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- npm or yarn package manager installed.
- Expo CLI installed globally (`npm install -g expo-cli` or `yarn global add expo-cli`).

### Installation

1. Clone the repository:
   
2. Navigate into the project directory:

3. Install dependencies:

## Running the App

To run the app locally, follow these steps:

1. Start the Expo development server:

2. Use your preferred method to run the app:
- Scan the QR code with the Expo Go app on your device.
- Press `a` to open the app in an Android emulator.
- Press `i` to open the app in an iOS simulator.

## Screens

### Home

The landing page of the app, providing options for user registration and login.

### Registration

Allows users to register for the app.

### Dashboard

Displays the user dashboard.

### User List

Shows a list of users.

### Login

Allows registered users to log in.

### Help

The Help screen allows users to leave comments or feedback. It includes a form where users can input their comments and submit them. The form validation is handled using the `react-hook-form` library.


### About

Displays information about the app.

## UserComponent

The `UserComponent.tsx` file is a React component responsible for fetching and displaying user data based on a given user ID. It utilizes the `useQuery` hook from `react-query` to fetch user data asynchronously from an API endpoint defined in `userApi.ts`. Once the data is fetched, it renders the user's information such as ID, name, email, and phone number.

## Store Configuration (store.ts)

The `store.ts` file configures the Redux store using Redux Toolkit's `configureStore` function. It combines reducers using the reducer configuration option and exports the RootState type.

## User API (userApi.ts)

The `userApi.ts` file contains functions for fetching user data from a backend server. The `fetchUserById` function makes a fetch request to the backend server to retrieve user data based on a given user ID.

## User Slice (userSlice.ts)

The `userSlice.ts` file defines a Redux slice for managing user state. It includes actions for fetching user data asynchronously using Redux Toolkit's `createAsyncThunk` function. The slice also includes a reducer and selectors for accessing user data in the Redux store.

## Built With

## Built With

- [React Native](https://reactnative.dev/) - A JavaScript framework for building native mobile apps using React.
- [Expo](https://expo.dev/) - A framework and a platform for universal React applications.
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for React Native apps.
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management library for React applications.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

