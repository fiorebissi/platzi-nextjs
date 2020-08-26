import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [avo, setAvo] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(({ data }) => setAvo(data))
        .catch((error) => console.error(error.message))
  }, [id])

  return (
    <div>
      <h1>Pagina Producto</h1>
      <h3>{avo?.name}</h3>
      <p>{avo?.attributes.description}</p>
    </div>
  )
}

export default ProductPage
