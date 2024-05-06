import { Link } from "react-router-dom"

interface Props {
    children : React.ReactNode
    name : string
}



const SidebarLinks = ({children , name} :Props) => {
  return (
    <a  className="flex p-1 rounded cursor-pointer stroke-[0.75 ] hover:stroke-slate-100 stroke-slate-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-color duration-100  ">
{children}
<p className="text-inherit  overflow-clip whitespace-nowrap tracking-wide mt-3 text-[15px] ">
    {name}
</p>

    </a>
  )
}

export default SidebarLinks