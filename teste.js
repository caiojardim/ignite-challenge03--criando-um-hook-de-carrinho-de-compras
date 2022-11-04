const product = [
  {
    "id": 1,
    "title": "Tênis de Caminhada Leve Confortável",
    "price": 179.9,
    "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
  },
  {
    "id": 2,
    "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
    "price": 139.9,
    "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
  },
]

productId = 2

let [res]= product.filter((cart) => cart.id == productId)
console.log(res)

console.log(!!undefined)