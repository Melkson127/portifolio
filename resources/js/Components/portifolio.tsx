import { PropsWithRef, ReactElement, useContext, useEffect, useState } from 'react'
import '../../css/portifolio.css'
import { PageProps } from '@/types'
interface project{
    title: string,
    description: string,
    img:string,
    technologies: Array<string>
}
export default function Portifolio({activate=false, projects = []}:{activate:boolean, projects:Array<project>}){
    projects.push(
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react', 'laravel', 'html']
    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
        {
            title: 'some project',
            description: 'some description',
            img:'/img0.jpg',
            technologies: ['react']

    
        },
    )
    const [animation, setAnimation] = useState('')
    setTimeout(()=>setAnimation('pageAnimation'))
    return (
        <section className={`page ${activate?animation:''}`}>
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
                                {project.img!=''?
                                (
                                    <div className="project-image">
                                        <img src={project.img} alt="" />
                                    </div>
                                ):''
                                }
                                <h1 className='project-title'> {project.title}</h1>
                                <p className='project-description'> {project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tec:string)=>{
                                        return (<i className={`bx bxl-${tec}`}></i>)        
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}