import { ApolloWrapper } from '@lib/apolloProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>
}
