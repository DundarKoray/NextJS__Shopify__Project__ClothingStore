
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllproducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <h1>Home Page</h1>
      <Grid>
        { products.slice(0, 6).map(product =>
          <ProductCard product={product} key={product.id} />
        )}
      </Grid>
    </>
  )
}

Home.Layout = Layout