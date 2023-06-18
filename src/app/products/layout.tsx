import { ApolloWrapper } from '@lib/apolloProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloWrapper>
      <div className="flex justify-center">
        <div className="container py-10">{children}</div>
      </div>
    </ApolloWrapper>
  )
}
