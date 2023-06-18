import { gql } from '@apollo/client'
import { ProductDescriptionCard } from '@components/products/molecules/ProductDescriptionCard'
import { ProductDetails } from '@components/products/molecules/ProductDetails'
import { getClient } from '@lib/apolloClient'
import { Product } from '@models/Product'

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

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const client = getClient()
  const { data } = await client.query<{ product: Product }>({
    query,
    variables: { id },
  })

  return (
    <div className="flex justify-between">
      <div className="w-2/5">
        <ProductDescriptionCard {...data} />
      </div>
      <div className="w-2/5">
        <ProductDetails {...data} />
      </div>
    </div>
  )
}
