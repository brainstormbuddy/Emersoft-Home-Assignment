import Link from "next/link";

interface Props {
  href: string;
  name: string;
  onClick?: (e: any) => void;
}
export default function Category({ href, name, onClick }: Props) {
  return (
    <Link
      className="p-2 rounded-md bg-gray-100 text-gray-600 hover:text-blue-400 transition-all dark:bg-zinc-800 dark:text-gray-400"
      href={href}
      onClick={onClick}>
      {name}
    </Link>
  );
}
