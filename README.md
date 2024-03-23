# Hotel Booking Management SPA with React & Supabase

A React Single Page Application (SPA) that serves as a hotel (fictional) internal booking management system.

## Live Demo

Check the [App live demo hosted on Vercel](https://hotel-booking-management-spa.vercel.app/)

You can log in using the credentials below:

Email address: user@user.com
Password: 12345678

When you sign in for the first time, click on **Reset and Upload ALL** on the sidebar to get fresh data on the dashboard. Creating new users is disabled for security reasons.

|   ![App dashboard](/screenshots/Screenshot-1.jpg 'App dashboard')   |            ![Bookings Page](/screenshots/Screenshot-3.jpg 'Bookings Page')            |
| :-----------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![Creating cabins](/screenshots/Screenshot-4.jpg 'Creating cabins') | ![Sales graph in dark mode](/screenshots/Screenshot-6.jpg 'Sales graph in dark mode') |

## App Description

This is an internal hotel booking management app that allows users (hotel employees) to:

- Create new users
- Create, delete, check-in and check-out Bookings
- Create, delete and update Hotel Cabins
- Set hotel settings such as minimum nights, maximun nights, maximun guests per booking and breakfast price

## Libraries and Features

This app uses the following libraries and features:

- Routing using [React Router](https://reactrouter.com/en/main)
- Remote state management using [Tanstack Query (React Query)](https://tanstack.com/query/latest)
- Remote serverless database provided by [Supabase](https://supabase.com/database)
- Authentication using [Supabase Authentication](https://supabase.com/auth)
- Styles created using [Styled Components](https://styled-components.com)
- Toasts with [React Hot Toast](https://react-hot-toast.com)
- Global state management using React's Context API
- Dark Mode
- Lazy Loading using the Suspense API
- Better handling of date objects using [date-fns](https://date-fns.org)
- Form handling with [React Hook Form](https://react-hook-form.com)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Dashboard charts using [Recharts](https://recharts.org/en-US/)
- Built using [Vite](https://vitejs.dev)

## Room for improvement

Here are a few basic features and considerations that this app could benefit from. There are more features that would be great to have if this was a full featured booking system, but these are the most important ones:

- Ability to add and edit bookings (they currently come from a fictional API)
- Ability to set minimum and maximun guests per cabin
- Ability to set minimum and maximum nights per cabin
- Ability to set discounts for specific bookings
- List of users
- Create a super-admin user with priviledge to delete users
- Add mobile styling
- Improve accessibility
- Fix bug in which contextual menus lose their position when a user scrolls down the page

## Context

This is the final project for ['The Ultimate React Course 2024: React, Redux & More'](https://www.udemy.com/course/the-ultimate-react-course/) by [Jonas Schmedtmann](https://codingheroes.io/) completed February 2024.

I wrote the great majority of the React code for this app, always writing code before watching the taught content of the module. Some React components and boilerplate, as well as most of the styles for this project were provided by the course instructor [Jonas Schmedtmann](https://codingheroes.io/). The app is **not** styled for mobile, only desktop.
