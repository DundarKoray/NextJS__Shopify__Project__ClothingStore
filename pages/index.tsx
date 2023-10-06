
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({products}: InferGetStaticPropsType<typeof getStaticProps>) {


  return (
    <>
      <Grid>
        { products.slice(0, 6).map(product =>
          <ProductCard product={product} key={product.id} />
        )}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Marquee>
        { products.slice(0, 3).map(product =>
          <ProductCard variant="slim" product={product} key={product.id} />
        )}
      </Marquee>
      <Grid layout="B">
        { products.slice(0, 6).map(product =>
          <ProductCard product={product} key={product.id} />
        )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0, 3).map(product =>
          <ProductCard variant="slim" product={product} key={product.id} />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout