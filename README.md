# Parthos Next.js Application

A production-ready Next.js application with React, TypeScript, Tailwind CSS, Prisma ORM, and Supabase authentication.

## 🚀 Features

- Next.js App Router
- React 18 with TypeScript
- Tailwind CSS for styling
- Dark mode support with next-themes
- Prisma ORM for database management
- Supabase authentication
- Responsive design
- Type-safe components
- ESLint configuration for best practices
- Error boundaries for graceful error handling

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (for Prisma)
- Supabase account

## 🛠️ Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/parthos-app.git
cd parthos-app
```

2. Install dependencies:

```bash
npm install
# or
yarn 
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit the `.env.local` file with your own credentials.

4. Initialize Prisma:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running in Production

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
parthos-app/
├── prisma/               # Prisma schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router components
│   │   ├── api/          # API routes
│   │   ├── (auth)/       # Auth-related routes (login, register)
│   │   ├── dashboard/    # Dashboard routes
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── auth/         # Authentication components
│   │   ├── ui/           # UI components
│   │   └── ...
│   └── lib/              # Utilities and helpers
│       ├── prisma/       # Prisma client
│       ├── supabase/     # Supabase client
│       ├── constants.ts  # Application constants
│       ├── types.ts      # TypeScript types
│       └── utils.ts      # Utility functions
├── .env.example          # Example environment variables
├── .eslintrc.js          # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Customization

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.ts`.

### Database Schema

Update the Prisma schema in `prisma/schema.prisma` and run migrations:

```bash
npx prisma migrate dev --name your_migration_name
```

### Authentication

The project uses Supabase for authentication. Configure your Supabase project settings in `.env.local`.

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import your project into Vercel
3. Set your environment variables
4. Deploy

### Other Platforms

You can also deploy to other platforms like:

- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.