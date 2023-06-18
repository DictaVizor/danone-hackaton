'use client'
import { gql, useSuspenseQuery } from '@apollo/client'
import { useCalorieIntakeStore } from '@components/CalorieIntake/store'
import { CalorieIntakeDiaryForm } from '@components/diary/organisms/CalorieIntakeDiaryForm'
import { DiaryProductRecommendation } from '@components/diary/organisms/DiaryProductRecommendation'
import { Product } from '@models/Product'
import { useEffect, useMemo } from 'react'

const query = gql`
  query ($itemCount: Int!) {
    productsConnection(first: $itemCount) {
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
    }
  }
`

export default function DiaryPage() {
  const { data } = useSuspenseQuery<{
    productsConnection: {
      edges: {
        cursor: string
        node: Pick<Product, 'calories' | 'id' | 'name' | 'image'>
      }[]
    }
  }>(query, {
    variables: {
      itemCount: 4,
    },
  })

  const products = useMemo(
    () => data.productsConnection.edges.map((edge) => edge.node),
    [data],
  )

  // Rehydrate zustand store
  useEffect(() => {
    useCalorieIntakeStore.persist.rehydrate()
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-2xl text-light-blue2 font-semibold">
        Welcome to your diary!
      </h1>
      <div className="flex gap-20">
        <div className="w-1/2">
          <CalorieIntakeDiaryForm />
        </div>
        <div className="w-1/2">
          <DiaryProductRecommendation products={products} />
        </div>
      </div>
    </div>
  )
}
