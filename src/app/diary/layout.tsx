import { ApolloProvider } from '@apollo/client'
import { ApolloWrapper } from '@lib/apolloProvider'

export default function DiaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloWrapper>
      <div className="flex justify-center py-8 bg-white h-full flex-grow">
        <div className="container h-full">{children}</div>
      </div>
    </ApolloWrapper>
  )
}
