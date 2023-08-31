import { FC } from "react";
import Link from "next/link"
import { Bag, Heart } from "@components/icons";
import style from "./Usernav.module.css"

const Usernav: FC = () => {
  return (
    <nav>
        <ul className={style.list}>
            <li className={style.item}><Bag /></li>
            <li className={style.item}><Link href="wishlist"><a><Heart /></a></Link></li>
        </ul>
    </nav>
  )
}
export default Usernav
