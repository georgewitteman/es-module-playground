import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <p>
      <Link href="/test">Test</Link>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </p>
  );
}
