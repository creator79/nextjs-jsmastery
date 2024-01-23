import Image from 'next/image';
import Link from 'next/link'


export default function Page({params}) {
  return (
    <main>
      
      <h1>My Projects {params.name} </h1>

    </main>
  );
}
