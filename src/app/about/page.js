import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1><center>About page</center></h1>
    <br />
    <center>
    <Link href="/">Home</Link> |
    <Link href="/about">About</Link> |
    <Link href="/service">Service</Link> |
    <Link href="/contact">Contact</Link> |
    </center>
    </>
  );
}
