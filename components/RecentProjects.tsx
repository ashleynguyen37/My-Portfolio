"use client";

import { projects } from '@/data'
import React from 'react'
import { CardContainer, CardBody, CardItem } from './ui/threeDCard';

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-10 gap-32 mt-10 lg:gap-30'>
        {projects.map(({id, title, des, img, iconLists, link,}) => (
            <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                <CardContainer title={title}>
                    <CardBody className='bg-gray-50 z-10 relative group/card  dark:hover:shadow-2xl
                     dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
                      border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                        <CardItem
                            translateZ="50"
                             className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                 {title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {des}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                            src={img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt={title}
                        />
                        
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={icon} alt="icon5" className="p-2" />
                                    </div>
                                 ))}
                            </div>
                            <CardItem
                                translateZ={20}
                                as= "button"
                                href={link}
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                style={{ zIndex: 30 }}
                            >
                                View →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects