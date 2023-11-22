import { Link, Head } from '@inertiajs/react';
import { PageProps, } from '@/types';
import { useState } from 'react';
import Portifolio from '../Components/portifolio';
import About from '../Components/about';
import '../../css/index.css';
export default function Welcome() {
    const [menuState, setMenuState] = useState(false)
    const [page, setPage] = useState('')
    
    return (
        <>
            <Head title="Welcome" />
            <header className="principal">
                <div className="title">
                    <h1>MA</h1>
                </div>
                <nav className={menuState?'activate':''}>
                   
                        <a
                            onClick={()=>setPage('')}
                            className=""
                        >
                            home
                        </a>
                        <a
                            onClick={()=>setPage('about')}
                            className=""
                        >
                            about
                        </a>

                        <a
                            onClick={()=>setPage('blog')}
                            className=""
                        >
                            blog
                        </a>
                        <a
                            onClick={()=>setPage('portifolio')}
                            className=""
                        >
                            portifolio
                        </a>
                </nav>
                <address     className="icons">
                    <a href="">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="">
                        <i className='bx bxl-bx bxl-linkedin-square'></i>  
                    </a>
                    <a  onClick={()=>menuState?setMenuState(false):setMenuState(true)}>
                        <i className={menuState?'bx bx-x':'bx bx-menu'}></i>
                    </a>
                    
                </address>
            </header>   
            <main>
                <section className={page == ''?'introduction':'inactive'}>
                    <h1 className='introduction-title'>    
                        Olá, eu sou Melkson Albuquerque, <br />
                        Sou um programador fullStack
                    </h1>
                    <h6 className='description-home'>
                        Este site é destinado a apresentar um pouco sobre mim, e mostrar um pouco do meu trabalho
                    </h6>   
                    <a className="link-arrow" href="#" onClick={()=>setPage('portifolio')}>
						<span>Meus Projetos</span>	
						<img src="/ArrowRight.svg" alt="" />
					</a>
                </section>
                {page == 'portifolio'?(<Portifolio activate={true} projects={[]}/>):(<></>)}
                {page == 'about'?(<About activate={true} />):(<></>)}

            </main>
            <footer>    
                <a className="mail box-icon" href='mail:to'>
                    <i className='bx bx-envelope'></i>
                </a>
                <p>Todos os Direitos reservados, 2023   </p>
            </footer>
        </>
    );
}
