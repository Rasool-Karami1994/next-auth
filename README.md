
# Authentication Project with Next.js, TypeScript, and SCSS Modules

This project implements a simple authentication system with two main pages:

- **Auth page (`/auth`)** – Login form with Iranian phone number validation  
- **Dashboard page (`/dashboard`)** – Welcomes the authenticated user and displays user info

The user data is fetched from the [randomuser.me API](https://randomuser.me) and stored in `localStorage`.

---

## Features

- Login form with phone number validation (Iranian format)  
- Fetches random user data via API request  
- Stores user information in localStorage  
- Redirects to dashboard upon successful login  
- Dashboard protects against unauthorized access  
- Responsive design for different screen sizes  
- Uses Next.js (App Router), TypeScript, and SCSS Modules  
- Displays success and error notifications with [react-hot-toast](https://react-hot-toast.com)

---

## Getting Started

### Prerequisites

- Node.js (>=16.x recommended)  
- npm or yarn package manager

### Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
````

### Running Locally

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

## Project Structure

* `src/app/auth` – Authentication page
* `src/app/dashboard` – Dashboard page
* `src/components` – Reusable components (Input, Button, etc.)
* `src/styles` – SCSS module files and variables
* `src/app/layout.tsx` – Root layout including toast notifications

---

## Technologies Used

* [Next.js](https://nextjs.org) (App Router)
* [TypeScript](https://www.typescriptlang.org)
* [Sass / SCSS](https://sass-lang.com) with CSS Modules
* [react-hot-toast](https://react-hot-toast.com) for notifications
* [randomuser.me](https://randomuser.me) API for user data

---

## Important Notes

* External images from randomuser.me are configured in `next.config.js`
* Phone number input is validated via regex but not used for authentication
* User data is persisted in localStorage for session management
* Root page (`/`) redirects users based on authentication status

---

## Demo

[Live Demo Link](https://your-demo-url-here.com)

---

## Contact

Feel free to reach out for questions or feedback:

* Email: [rasoolkarami2304@gmail.com](mailto:rasoolkarami2304@gmail.com)
* LinkedIn: [https://www.linkedin.com/in/rasool-karami2304/](https://www.linkedin.com/in/rasool-karami2304/)

---

Thank you for checking out this project!
