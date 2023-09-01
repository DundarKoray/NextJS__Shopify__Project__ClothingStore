import { FC, useState } from "react";
import Link from "next/link"
import { Cart, Heart } from "@components/icons";
import style from "./Usernav.module.css"
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  // const ui = useUI();
  const { openSidebar } = useUI()
  return (
    <nav>
        <ul className={style.list}>
            <li className={style.item}><Cart onClick={openSidebar} /></li>
            <li className={style.item}><Link href="/wishlist"><a><Heart /></a></Link></li>
        </ul>
    </nav>
  )
}
export default Usernav

