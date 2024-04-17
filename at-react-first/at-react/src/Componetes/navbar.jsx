import style from './Navbar.module.css'

export default function Navbar() {
    return(
        <div className={style.navbar}>
            <h1 className={style.botao}>Home</h1>
            <h1 className={style.botao}>Sobre</h1>
            <h1 className={style.botao}>Contato</h1>
        </div>
    )
}

 