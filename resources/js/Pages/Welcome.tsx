import { Link, Head } from '@inertiajs/react';
import { PageProps, } from '@/types';
import { useState } from 'react';
export default function Welcome() {
    var [menuState, setMenuState] = useState('')
    function setMenu(){
        if(menuState == 'activate'){
            setMenuState('')
        }else{
            setMenuState('activate')
        }
    }
    return (
        <>
            <Head title="Welcome" />
            <header className="principal">
                <div className="title">
                    <h1>MA</h1>
                </div>
                <nav className={menuState}>
                   
                        <a
                            href={route('dashboard')}
                            className=""
                        >
                            home
                        </a>
                        <a
                            href={route('login')}
                            className=""
                        >
                            about
                        </a>

                        <a
                            href={route('register')}
                            className=""
                        >
                            blog
                        </a>
                        <a
                            href={route('register')}
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
                    <a href="#" onClick={setMenu}>
                        <i className='bx bx-menu'></i>
                    </a>
                    
                </address>
            </header>   
            <main>
                <section className='introduction'>
                    <h1 className='introduction-title'>    
                        Olá, eu sou Melkson Albuquerque, <br />
                        Sou um programador fullStack
                    </h1>
                    <h6 className='description-home'>
                        Este site é destinado a apresentar um pouco sobre mim, e mostrar um pouco do meu trabalho
                    </h6>   
                    <a className="link-arrow" href="">
						<span>My Recent Work</span>	
						<img src="/ArrowRight.svg" alt="" />
					</a>
                </section>
                <portifolio></portifolio>

            </main>
            <footer>    
                <a className="mail box-icon" href='mailt:to'>
                    <i className='bx bx-envelope'></i>
                </a>
                <p>Todos os Direitos reservados, 2023   </p>
            </footer>
        </>
    );
}
