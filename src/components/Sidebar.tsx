import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import SidebarLinks from './SidebarLinks'
import { ChartBarIcon, ChartPieIcon, DocumentCheckIcon, Square2StackIcon, UsersIcon } from '@heroicons/react/24/outline'
import ProjectLink from './ProjectLink'
import { Link } from 'react-router-dom'

const containerVariants = {
    close: {
        width: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },

    },
    open: {
        width: "16rem",
       
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    }
}
const svgVariants = {
    close: {
        rotate: 360,

    },
    open: {
        rotate: 180,


    }
}


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const containerControls = useAnimationControls()
    const svgControls = useAnimationControls()
    useEffect(() => {
        if (isOpen) {
            containerControls.start("open")
            svgControls.start("open")
        } else {
            containerControls.start("close")
            svgControls.start("close")
        }
    }, [isOpen])
    const handleOpenCLose = () => {

        setIsOpen(!isOpen)
    }


    const [selectedProject, setSelectedProject] = useState<string | null>(null)



    return (
        <motion.nav variants={containerVariants}
            animate={containerControls}
            initial="close"
            className='bg-neutral-900  flex flex-col z-10 gap-14 p-4 max-sm:fixed max-md:fixed sticky top-0 left-0 h-full shadow shadow-neutral-600'>
            <div className='flex flex-row w-full justify-between place-items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full'/>

                <button className='p-1 rounded-full flex' onClick={() => handleOpenCLose()}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-8 h-8 stroke-neutral-200">
                        <motion.path strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={svgVariants}
                            animate={svgControls}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>


                </button>
            </div>
            <div className='flex flex-col gap-1 '>
                <Link to='/'>
                
                <SidebarLinks name='Dashboard'>
                    <ChartBarIcon className='stroke-inherit stroke-[0.75] min-w-[30px] w-[30px]' />
                </SidebarLinks>
                </Link>
                <Link to='/create'>
                <SidebarLinks name='Create'>
                    <Square2StackIcon className='stroke-inherit stroke-[0.75] min-w-[30px] w-[30px]' />
                </SidebarLinks>
                </Link>
                <Link to='/tasks'>
                <SidebarLinks name='Tasks'>
                    <DocumentCheckIcon className='stroke-inherit stroke-[0.75] min-w-[30px] w-[30px]' />
                </SidebarLinks>
                </Link>
                <SidebarLinks name='Reporting'>
                    <ChartPieIcon className='stroke-inherit stroke-[0.75] min-w-[30px] w-[30px]' />
                </SidebarLinks>
                <SidebarLinks name='Users'>
                    <UsersIcon className='stroke-inherit stroke-[0.75] min-w-[30px] w-[30px]' />
                </SidebarLinks>
            </div>
            <div className='flex flex-col gap-2'>
                <ProjectLink
                    name='Virtual Reality '
                    setSelectedProject={setSelectedProject}
                >
                    <div className=' min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700'/>
                </ProjectLink>
                <ProjectLink
                    name=' Apple Vision Pro '
                    setSelectedProject={setSelectedProject}
                >
                    <div className=' min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700'/>
                </ProjectLink>
                <ProjectLink
                    name=' Porsche '
                    setSelectedProject={setSelectedProject}
                >
                    <div className=' min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700'/>
                </ProjectLink>
                <ProjectLink
                    name=' Secret Project '
                    setSelectedProject={setSelectedProject}
                >
                    <div className=' min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700'/>
                </ProjectLink>
            </div>

        </motion.nav>
    )
}

export default Sidebar