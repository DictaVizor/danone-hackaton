import { ApolloWrapper } from '@lib/apolloProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloWrapper>
      <div className="flex justify-center w-full">{children}</div>
    </ApolloWrapper>
  )
}
