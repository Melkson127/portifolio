import { useState } from 'react'
import '../../css/about.css'
export default function About({activate=false}:{activate:boolean}){
    const [animation, setAnimation] = useState('')
    setTimeout(()=>setAnimation('pageAnimation'))
    return (
        <section className={`page ${activate?animation:''}`}>
            <div className="title">
                <h1>About</h1>
            </div>
            <div className="about-container">
                <div className="cv">
                    <h1>Sobre Mim</h1>
                    <p className="description">
                     Conheci a área de software através de um curso técnico na etec jardim Ângela onde pude aprender logica de programação, padrões de projeto e me introduziu as tecnologias que sei hoje, tambem me deu oportunidade de desenvolver projetos em equipe, em destaque meu TCC onde participei do desenvolvimento de uma rede social onde trabalhei no desenvolvimento do app mobile, desenvolvendo a interface e fanzendo a comunicação do app com as APIs. Com a base que o curso tecnico me proporcionou segui estudando atualmente trabalho como Desenvolvedor freelancer.
                    </p>
                    <h1>Eu tenho experiência com:</h1>
                    <p className="experiense">
                        <strong>Backend:</strong> PHP, Laravel, Nodejs, Express,SQL, Mysql e Postgres <br />
                        <strong>Frontend:</strong> HTMl, CSS, Javascript, Reactjs, AngularJS
                    </p>
                    <a className="link-arrow" href="">
						<span>Meus Projetos</span>	
						<img src="/ArrowRight.svg" alt="" />
					</a>
                </div>
            </div>
        </section>
    )
}