import { PropsWithRef, ReactElement, useContext, useEffect, useState } from 'react'
import '../../css/portifolio.css'
import { PageProps } from '@/types'
export default function Portifolio({activate=false, projects = []}:{activate:boolean, projects:Array<any>}){
    projects.push(
        {
            title: 'some project',
            description: 'some description',
            img:''
    
        },
        {
            title: 'some project',
            description: 'some description',
            img:''
    
        }
    )
    
    return (
        <section className={activate?'portifolio':'inactive'}>
            <div className="title">
                <h1 className='title'>Portifolio</h1>
            </div>
            <div className="container">
                <h1>Some projects I worked on, let me know what you think! <br />
                Send me an <a href="">Email</a> or get in touch on <a href="">GitHub</a>    (:</h1>
                <div className="projects">
                    {projects.map((project)=>{
                        return(
                            <div className="project">
                                <img src={project.img} alt="" />
                                <h1 className='project-title'> {project.title}</h1>
                                <p className='project-description'> {project.description}</p>
                                <div className="technologies">
                            
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}