import { createStorefrontClient } from '@shopify/hydrogen-react'
import Hero from '@/components/Hero'
import FeaturedCollection from '@/components/FeaturedCollection'
import { iGraphqlResponse } from '@/utils/interfaces/Product'

export const client = createStorefrontClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontApiVersion: '2025-01',
  privateStorefrontToken: process.env.SHOPIFY_PRIVATE_TOKEN,
})

const GRAPHQL_QUERY = `
  query {    
    products(first: 16) {
        nodes {
            availableForSale
            description
            handle
            id
            productType
            title
            totalInventory
            vendor
            priceRange {
                maxVariantPrice {
                    amount
                    currencyCode
                }
            }
            images(first: 1) {
                nodes {
                    altText
                    height
                    id
                    src
                    width
                }
            }
        }
    }
  }
`

export default async function Home() {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token':
        process.env.SHOPIFY_PRIVATE_TOKEN || '',
    },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const info: iGraphqlResponse = await response.json()

  return (
    <main>
      <Hero products={info.data.products.nodes} />
      <FeaturedCollection products={info.data.products.nodes} />
    </main>
  )
}
