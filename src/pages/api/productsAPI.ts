import Product from "@/types/product";

export async function getProducts() {
  const url = process.env.NEXT_PUBLIC_PRODUCT_API_URL;
  const productList = await fetch(url as string);
  const productListJson = await productList.json();
  const productsResults = productListJson.results;

  const products = productsResults.map((product: Product) => {
    return {
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
    };
  });

  return products;
}
