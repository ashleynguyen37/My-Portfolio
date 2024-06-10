"use client";
import React from 'react'
import { AnimatedTooltip } from './ui/toolTip'

const skill = [
    {
        id: 1,
        name: "JavaScript",
        image: "/skills/javascript.png",
    },
    {
        id: 2,
        name: "TypeScript",
        image: "/skills/typescript.png",
    },
    {
        id: 3,
        name: "Python",
        image: "/skills/python.jpg",
    },
    {
        id: 4,
        name: "Tailwind CSS",
        image: "/skills/tailwind.jpg",
    },
    {
        id: 5,
        name: "CSS",
        image: "/skills/css.jpg",
    },
    {
        id: 6,
        name: "HTML",
        image: "/skills/html.jpg",
    },
    {
        id: 7,
        name: "Bootstrap",
        image: "/skills/bootstrap.png",
    },
    {
        id: 8,
        name: "react.js",
        image: "/skills/react.jpg",
    },
    {
        id: 9,
        name: "knex.js",
        image: "/skills/knex.png",
    },
    {
        id: 10,
        name: "figma",
        image: "/skills/figma.png",
    },
    ];

    const skill2 = [
        {
            id: 1,
            name: "node.js",
            image: "/skills/node.jpg",
        },
        {
            id: 2,
            name: "PostgreSQL",
            image: "/skills/postgresql.jpg",
        },
        {
            id: 3,
            name: "spline",
            image: "/skills/spline.png",
        },
        {
            id: 4,
            name: "SQL",
            image: "/skills/sql.jpg",
        },
        {
            id: 5,
            name: "Framer Motion",
            image: "/skills/framer.png",
        },
        {
            id: 6,
            name: "Django",
            image: "/skills/django.jpg",
        },
        {
            id: 7,
            name: "Sentry",
            image: "/skills/sentry.png",
        },
        ];

        export function AnimatedTooltipPreview() {
            return (
              <div className="flex flex-col items-center justify-center mb-10 w-full" id="skills">
                <h1 className="heading mb-10">
                     My <span className="text-purple">skills</span>
                </h1>
                <div className="flex flex-row items-center justify-center w-full mb-10">
                  <AnimatedTooltip items={skill} />
                </div>
                <div className="flex flex-row items-center justify-center w-full">
                  <AnimatedTooltip items={skill2} />
                </div>
              </div>
            );
          }
          
          