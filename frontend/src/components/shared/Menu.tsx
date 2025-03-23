"use client";
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
  const usedPath = usePathname();
  return(
    <nav className="flex gap-6">
      <MenuItem href="/" selected={usedPath === "/"}>Home</MenuItem>
      <MenuItem href="/project/1" selected={usedPath.startsWith("/project")}>Projects</MenuItem>
      <MenuItem 
        href="https://api.whatsapp.com/send/?phone=55555555&text&type=phone_number" 
        selected={false}
        newTab={true}>
          Contact
        </MenuItem>
    </nav>
  )
}

function MenuItem(props: {
  href: string
  children: React.ReactNode
  selected: boolean
  newTab?: boolean
}) {
  return (
		<Link href={props.href} target={props.newTab ? "_blank" : "_self"}>
			<span
				className={`
                    flex items-center gap-2 text-sm border-blue-600 hover:text-white
                    ${props.selected ? "border-b-4 text-white" : "text-zinc-300"}    
                `}
			>
				{props.children}
			</span>
		</Link>
	)
}