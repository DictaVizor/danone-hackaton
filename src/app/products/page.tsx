'use client'
import { Button } from '@components/common/atoms/Button'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { gql, useQuery, useSuspenseQuery } from '@apollo/client'
import { ProductCard } from '@components/products/molecules/ProductCard'

const query = gql`
  query ($itemsPerPage: Int!) {
    productsConnection(first: $itemsPerPage) {
      edges {
        cursor
        node {
          id

          name
          image {
            url
          }
          calories
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      aggregate {
        count
      }
    }
  }
`
export default function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()
  const itemsPerPage = 10
  const page = Number(searchParams.get('page'))
  const isValidPage = page && page > 0
  const { data } = useSuspenseQuery<any>(query, {
    variables: {
      itemsPerPage,
    },
  })

  const products = useMemo(
    () =>
      data.productsConnection.edges.map((edge: any) => ({
        calories: edge.node.calories,
        image: edge.node.image.url,
        name: edge.node.name,
        id: edge.node.id,
      })),
    [data],
  )

  console.log(products)

  useEffect(() => {
    if (isValidPage) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', '1')

      router.push(`${pathName}?${params}`)
    }
  }, [page])

  return (
    <div className="flex py-8 px-16">
      <div className="flex flex-col gap-8">
        <div className="flex gap-12">
          <Button size="SMALL" variant="SECONDARY">
            Show all
          </Button>
          <Button size="SMALL" variant="SECONDARY">
            According to my calorie limit
          </Button>
        </div>
        <div className="flex gap-8">
          {products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div>2</div>
    </div>
  )
}
