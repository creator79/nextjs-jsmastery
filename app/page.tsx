import Image from 'next/image';
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <Link href='/sign-in'>
        Go To SignIn Page
      </Link>

      <Link href='/sign-up'>
        Go To SignUp Page
      </Link>

      <h1>Home</h1>

    </main>
  );
}
