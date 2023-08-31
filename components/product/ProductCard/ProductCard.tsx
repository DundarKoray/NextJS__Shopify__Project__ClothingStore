import { Product } from "@common/types/product"
import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import style from "./ProductCard.module.css"

interface Props {
    product: Product
    variant?: "simple" | "slim"
}

const placeholderImage = "/product-image-placeholder.svg"

const ProductCard: FC<Props> = ({product, variant = "simple"}) => {

    return (
        <Link href={`/products/${product.slug}`}>
            <a className={style.root}>
                { variant === "slim" ?
                    <div className={style.slimProduct}>
                        <div>
                            <span className={style.productName}>{product.name}</span>
                        </div>
                        { product.images && (
                            <Image
                                alt={product.name ?? "Product image"}
                                // checks if there is image, if not use the default placeholder image
                                src={product.images[0].url ?? placeholderImage}
                                height={320}
                                width={320}
                                quality="85"
                                layout="fixed"
                                className={style.productImage}
                            />
                        )}
                    </div> :
                    <>
                        <div className={style.productBg}></div>
                        { product.images && (
                            <Image
                                alt={product.name ?? "Product image"}
                                // checks if there is image, if not use the default placeholder image
                                src={product.images[0].url ?? placeholderImage}
                                height={540}
                                width={540}
                                quality="85"
                                layout="responsive"
                                className={style.productImage}
                            />
                        )}
                        <div className={style.productTag}>
                            <h3 className={style.productTitle}>
                                <span>{product.name}</span>
                            </h3>
                            <span className={style.productPrice}>{product.price.value} {product.price.currencyCode}</span>
                        </div>
                    </>
                }
            </a>
        </Link>
    )
}

export default ProductCard