import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-col items-center mt-2">
                <img className="text-xl leading-4" src="/logo.png" alt="Logo" />
            </div>
        </Link>
    )
}