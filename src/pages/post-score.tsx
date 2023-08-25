import { Inter } from 'next/font/google'
import Button from '@mui/material/Button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function PostScore() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      post a score - form
      <Link href='/intro-screen'>
        <Button variant="outlined">Back Home</Button>
      </Link>
    </main>
  )
}