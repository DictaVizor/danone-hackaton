'use client'
import { Button } from '@components/common/atoms/Button'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { EventHandler, FormEvent, useEffect, useMemo, useRef } from 'react'
import { gql, useQuery, useSuspenseQuery } from '@apollo/client'
import { ProductCard } from '@components/products/molecules/ProductCard'
import SearchIcon from '@public/icons/search-icon.svg'

const query = gql`
  query ($itemsPerPage: Int!, $search: String) {
    productsConnection(first: $itemsPerPage, where: { _search: $search }) {
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
  const itemsPerPage = 1
  const filters = searchParams.get('filters')?.split(',')
  const search = searchParams.get('search')
  const searchRef = useRef<HTMLInputElement>(null)
  const { data } = useSuspenseQuery<any>(query, {
    variables: {
      itemsPerPage,
      search: search || '',
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

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchValue = searchRef.current?.value
    if (!searchValue) {
      const params = new URLSearchParams(searchParams.toString())
      params.delete('search')

      router.push(`${pathName}?${params}`)
      return
    }

    const params = new URLSearchParams(searchParams.toString())
    params.set('search', searchValue)

    router.push(`${pathName}?${params}`)
  }

  const handleShowAll = () => {
    router.push(`${pathName}`)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <form onSubmit={handleSearch}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <SearchIcon viewBox="0 0 24 24" height={15} width={15} />
              </button>
            </span>
            <input
              ref={searchRef}
              type="search"
              name="q"
              className="py-2 text-sm text-violet-blue bg-transparent rounded-md pl-10 focus:outline-none  border border-violet-blue"
              placeholder="Search product..."
              autoComplete="off"
            />
          </form>
        </div>
      </div>

      <div className="flex py-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-12">
            <Button
              size="SMALL"
              variant={
                !search && (filters?.includes('all') || !filters)
                  ? 'PRIMARY'
                  : 'SECONDARY'
              }
              onClick={handleShowAll}
            >
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
        <div className="flex items-center"></div>
      </div>
    </div>
  )
}
