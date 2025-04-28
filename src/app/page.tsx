import { createStorefrontClient } from '@shopify/hydrogen-react'
import Hero from '@/components/Hero'
import FeaturedCollection from '@/components/FeaturedCollection'

export const client = createStorefrontClient({
  storeDomain: 'test-store-pablo.myshopify.com',
  storefrontApiVersion: '2025-01',
  privateStorefrontToken: '2be97a9fcf9a7bdf77d923608f3a10ba',
})

// const GRAPHQL_QUERY = `
//   query {
//     shop {
//       name
//     }
//   }
// `

export default async function Home() {
  // const response = await fetch(client.getStorefrontApiUrl(), {
  //   body: JSON.stringify({
  //     query: GRAPHQL_QUERY,
  //   }),

  //   method: 'POST',
  // })

  // if (!response.ok) {
  //   throw new Error(response.statusText)
  // }

  // const json = await response.json()

  return (
    <main>
      <Hero />
      <FeaturedCollection />
    </main>
  )
}
