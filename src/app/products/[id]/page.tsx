import { gql } from '@apollo/client'
import { ProductDescriptionCard } from '@components/products/molecules/ProductDescriptionCard'
import { ProductDetails } from '@components/products/molecules/ProductDetails'
import { getClient } from '@lib/apolloClient'
import { Product } from '@models/Product'
import { Metadata } from 'next'
import Head from 'next/head'

const query = gql`
  query ($id: ID!) {
    product(where: { id: $id }) {
      name
      description
      ingredients
      details
      weight
      calories
      fat
      carbs
      ean
      ecologicalFootprint
      co2
      carbonFootprint
      nutriScore
      image {
        url
      }
    }
  }
`

type Props = {
  params: { id: string }
}
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const client = getClient()
  const { data } = await client.query<{ product: Product }>({
    query,
    variables: { id },
  })

  return {
    title: data.product.name,
    description: data.product.description,
    openGraph: {
      title: data.product.name,
      description: data.product.description,
      images: data.product.image.url,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.product.name,
      description: data.product.description,
      images: [data.product.image.url],
    },
  }
}

export default async function ProductPage({ params: { id } }: Props) {
  const client = getClient()
  const { data } = await client.query<{ product: Product }>({
    query,
    variables: { id },
  })

  return (
    <>
      <div className="flex justify-between">
        <div className="w-2/5">
          <ProductDescriptionCard {...data} />
        </div>
        <div className="w-2/5">
          <ProductDetails {...data} />
        </div>
      </div>
    </>
  )
}
