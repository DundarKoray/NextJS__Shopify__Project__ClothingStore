import { FC } from "react"
import { Container } from "@components/ui"
import Link from "next/link"
import { Usernav } from "@components/common"
import style from "./Navbar.module.css"

const Navbar: FC = () => {
  return (
    <Container>
        <div className={style.root}>
            <Link href="/">
                <a className={style.logo}>EXOVE_STORE</a>
            </Link>
            <nav className={style.nav}>
                <Link href="/"><a className={style.link}>All</a></Link>
                <Link href="/"><a className={style.link}>Clothes</a></Link>
                <Link href="/"><a className={style.link}>Accessories</a></Link>
                <Link href="/"><a className={style.link}>Shoes</a></Link>
            </nav>
            <Usernav />
        </div>
    </Container>
  )
}

export default Navbar