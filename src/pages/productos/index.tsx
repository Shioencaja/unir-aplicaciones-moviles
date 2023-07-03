import { getProducts } from "../api/productsAPI";
import Product from "@/types/product";
import { createProduct } from "../api/dataBaseAPI";
import { useState } from "react";
import Image from "next/image";

interface Props {
  products: Product[];
}

export default function Productos({ products }: Props) {
  const [isFavorites, setFavorites] = useState<Product[]>(products);
  const handleAddFavorites = async (product: Product) => {
    createProduct(product);
    setFavorites([...isFavorites, product]);
    alert(`${product.title} agregado a favoritos`);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-7xl font-black w-full text-center mb-8">
        Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-items-center justify-center max-w-[1200px]">
        {products.map((product, i) => (
          <div
            key={i}
            className="relative flex flex-col w-full h-full justify-center items-center max-w-xs border-[1px] p-8 rounded-lg border-black gap-8"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-center">
              <h3 className="text-md md:text-lg font-medium">
                {product.title}
              </h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
            <div className="absolute top-4 right-4">
              <button
                className="px-4 py-2 bg-orange-300 rounded-lg font-black hover:bg-orange-500 transition"
                onClick={() => handleAddFavorites(product)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const results = await getProducts();
  return {
    props: {
      products: results,
    },
  };
}
