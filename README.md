# NEXTJS-Auth.js

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a Next.js application that demonstrates authentication features using NextAuth.js. It includes various components, pages, middleware, and API routes to implement authentication, user management, and access control.


## Features

- **Authentication**: Users can sign up, sign in, and sign out using email/password, GitHub, or Google authentication.
- **Authorization**: Certain routes and features are protected and accessible only to authenticated users with specific roles.
- **User Management**: Admin users can create new users, view user details, and manage user roles.
- **Client and Server-side Rendering**: The application supports both client-side and server-side rendering for optimal performance and SEO.


## Live Demo

You can try out the live demo of the app [here](https://nextjs-auth-js.onrender.com).

## Folder Structure

```
app/
│
├── components/       # React components
│   ├── authProvider.jsx  # Authentication provider component
│   ├── nav.jsx       # Navigation component
│   └── userForm.jsx  # User form component
│
├── model/            # Data models
│   └── User.js       # User model
│
├── api/              # Next.js API routes
│   ├── auth/         # Authentication-related API routes
│   │   ├── [...nextauth].js  # NextAuth.js API route
│   │   ├── signin.js  # Sign-in API route
│   │   ├── signup.js  # Sign-up API route
│   │   └── ...        # Other authentication routes
│   ├── Users/        # User-related API routes
│   │   └── ...        # Other user management routes
│   └── ...           # Other API routes
│
├── ClientMember/     # Client member page
├── CreateUser/       # Create user page
├── Denied/           # Denied page
├── Member/           # Member page
└── Public/           # Public page

middleware.js         # Middleware functions

page.jsx               # Main app component representing the home page

```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss5.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss6.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss7.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss8.png" alt="Screenshot 1" width="1000"> 

## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS-Auth.js/blob/master/Screenshots/ss9.png" alt="Screenshot 1" width="1000"> 

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for building server-side rendered (SSR) and statically generated (SSG) web applications.
- [NextAuth.js](https://next-auth.js.org/): Authentication library for Next.js applications, supporting various authentication providers.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling web applications.
- [MongoDB](https://www.mongodb.com/): NoSQL database for storing user data and session information.



## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS-Auth.js.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to Use

### Usage

- **Sign Up**: Visit the sign-up page (`/signup`) to create a new user account using email and password or third-party authentication providers like GitHub or Google.
- **Sign In**: Access the sign-in page (`/signin`) to log in to an existing account.
- **Protected Routes**: Navigate to protected routes such as `/dashboard` or `/admin` to access user-specific features or admin functionalities. Unauthorized users will be redirected to the sign-in page.
- **User Management**: Admin users can create new users, view user details, and manage user roles from the admin dashboard (`/admin`).
- **Logout**: Click the logout button to sign out of the application and clear the session.


## API Endpoints

- **Sign Up**: `/api/auth/signup` - Endpoint for creating a new user account.
- **Sign In**: `/api/auth/signin` - Endpoint for logging in to an existing account.
- **Sign Out**: `/api/auth/signout` - Endpoint for logging out and clearing the session.
- **User Management**: `/api/admin/users` - Endpoint for managing users, including creating new users, viewing user details, and managing user roles.
- **Protected Routes**: Various routes such as `/dashboard` or `/admin` are protected and require authentication to access. Unauthorized users will be redirected to the sign-in page.


## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **Next.js**: Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. Visit [Next.js](https://nextjs.org/) for more information.

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **Node Mailer**: Nodemailer is a module for Node.js applications that allows sending emails. It is a powerful and easy-to-use module for sending email using Node.js. Visit [Nodemailer](https://nodemailer.com/about/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



