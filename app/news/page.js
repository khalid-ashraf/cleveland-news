import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/news/post-1'>News Post 1</Link>
        </li>
        <li>
          <Link href='/news/post-2'>News Post 2</Link>
        </li>
        <li>
          <Link href='/news/post-3'>News Post 3</Link>
        </li>
      </ul>
    </div>
  );
}
