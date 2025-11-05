import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-1.5 text-red-600">
      <h1 className=" text-center font-bold">Direct to</h1>
      <Link href="/form-p3" className="bg-red-300 text-center shadow-black p-3 rounded-t-2xl hover:cursor-pointer hover:bg-red-600 hover:text-red-200">
      Form login p3
        </Link>
        <Link href="/form-p4/1" className="bg-red-300 text-center shadow-black p-3 hover:cursor-pointer hover:bg-red-600 hover:text-red-200">
        Form login p4 latihan 1
        </Link>
        <Link href="/form-p4/2" className="bg-red-300 text-center shadow-black p-3  hover:cursor-pointer hover:bg-red-600 hover:text-red-200">
       Form login p4 latihan 2
        </Link>
        <Link href="/layouting" className="bg-red-300 text-center shadow-black p-3 rounded-b-2xl hover:cursor-pointer hover:bg-red-600 hover:text-red-200">
       layouting p5
        </Link>
</div>
  );
}
