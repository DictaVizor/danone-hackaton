// lib/apollo-provider.js
'use client'

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj05oaj80y9j01ucaubo90w4/master',
  })

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
    connectToDevTools: true,
  })
}

function makeSuspenseCache() {
  return new SuspenseCache()
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  )
}
