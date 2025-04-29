export interface iProductImage {
  altText: string | null
  height: number
  id: string
  src: string
  width: number
}

export interface iProduct {
  availableForSale: boolean
  description: string
  handle: string
  id: string
  images: {
    nodes: iProductImage[]
  }
  priceRange: {
    maxVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  productType: string
  title: string
  totalInventory: number
  vendor: string
}

export interface iGraphqlResponse {
  data: {
    products: {
      nodes: iProduct[]
    }
  }
}
