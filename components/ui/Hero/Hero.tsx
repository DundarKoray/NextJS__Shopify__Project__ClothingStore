import { FC } from "react"
import style from "./Hero.module.css"
import Link from "next/link"
import { Container } from "@components/ui"

interface Props {
    headline: string
    description: string
}

const Hero: FC<Props> = ({headline, description}) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={style.hero}>
            <h2 className={style.headline}>{headline}</h2>
            <div className={style.description}>
              <p>{description}</p>
              <Link href="/"><a className={style.link}>Read it here</a></Link>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero