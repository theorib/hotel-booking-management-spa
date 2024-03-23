# Hotel Booking Management SPA with React & Supabase

A React Single Page Application (SPA) that serves as a hotel (fictional) internal booking management system.

## Live Demo

[App live demo hosted on Vercel](https://the-wild-oasis-delta-flax.vercel.app/)

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

Here are a few basic features and considerations that this app could benefit from. There are more features that would be great to have if this was a full featured bookings system but these are the most important ones:

1. Ability to add and edit bookings (they currently come from a fictional api)
2. Ability to set minimum and maximun guest per cabin
3. Ability to set minimum and maximum nights per cabin
4. Ability to set discounts for each booking
5. List of users with ability to delete users
6. Add Mobile styling
7. Improve accessibility
8. Fix contextual menus loosing their position when a user scrolls down the page

## Context

This is the final project for the ['The Ultimate React Course 2024: React, Redux & More'](https://www.udemy.com/course/the-ultimate-react-course/) by [Jonas Schmedtmann](https://codingheroes.io/) completed February 2024.

I wrote the great majority of the React code for this app, always writing code before watching the taught content of the module. Some React components and boilerplate, as well as most of the styles for this project were provided by the course instructor [Jonas Schmedtmann](https://codingheroes.io/). The app is **not** styled for mobile, only desktop.
