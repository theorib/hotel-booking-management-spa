# The Wild Oasis

[A React Single Page Application (SPA)](https://the-wild-oasis-delta-flax.vercel.app/) That serves as a hotel (fictional) internal booking management system.

[This is the final project for the 'The Ultimate React Course 2024: React, Redux & More' by Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/) that I completed on February 15 2024.

I have written the great majority of the React code for this app, usually writting code upfront on my own and then watching the course instructions. Some react components and boilerplate as well as most of the styles for this project where provided by the course instructor [Jonas Schmedtmann](https://codingheroes.io/) and I don't claim any credit for it. The app is **_not styled for mobile_**, only desktop.

This is an internal hotel booking management app that allows users (who are hotel employees) to:

- Create new users
- Create, delete, check-in and check-out Bookings
- Create, delete and update Hotel Cabins
- Set hotel settings such as minimum nights, maximun nights, maximun guests per booking and breakfast price.
-

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

## Forking or cloning

For this project to work, you will need to set up a Supabase project and create a `.env` file at the root of your project directory with the following content:

`SUPABASE_KEY=yourSupabaseApiKey`
`SUPABASE_URL=yourSupabaseApiUrl`

Replace `yourApiKey` and `yourSupabaseApiUrl` with your own api key and url and on Supabase, you will need to create 4 tables in your Supabase project: `bookings`, `cabins`,`guests` and `settings`
