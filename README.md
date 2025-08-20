# RedSight

RedSight is a real-time traffic monitoring web application focused on detecting and displaying vehicle violations, particularly incidents of running red lights. The platform provides an intuitive interface for authorities and users to monitor, review, and manage traffic violations as they occur.

## Features

- **Real-Time Violation Feed:** View the latest red light violations with vehicle images, plate numbers, locations, and timestamps.
- **Search & Filter:** Quickly search for violations by plate number or intersection name.
- **Pagination:** Easily browse through large numbers of violations.
- **Authentication:** Secure login for authorized users using credentials.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Next.js API routes, Supabase (for violation data), MongoDB (for user/session data)
- **Authentication:** NextAuth.js with Credentials Provider
- **Styling:** Tailwind CSS

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone git@github.com:Perception12/red_sight.git
   cd redsight
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `MONGODB_URI`
     - `NEXTAUTH_SECRET`

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `app` - Next.js app directory (pages, layouts, API routes)
- `components` - React components (Feed, InfoCard, Pagination, etc.)
- `lib` - Authentication configuration
- `utils` - Utility functions (Supabase client, pagination helpers)
- `styles` - Global styles (Tailwind CSS)

---

RedSight helps make roads safer by providing authorities with the tools to monitor and address red light violations efficiently and transparently.