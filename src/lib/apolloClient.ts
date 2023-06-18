import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

// Taken from official apollo blog: https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/

export const createClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj05oaj80y9j01ucaubo90w4/master',
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  })
}

export const { getClient } = registerApolloClient(createClient)
