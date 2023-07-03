import { useState } from "react";
import { getItems, deleteItem } from "../api/dataBaseAPI";
import Product from "@/types/product";
import Image from "next/image";

interface Props {
  favorites: Product[];
}

export default function Favoritos({ favorites }: Props) {
  const [isFavorites, setFavorites] = useState<Product[]>(favorites);
  const handleRemoveFavorites = async (product: Product) => {
    deleteItem(product);
    setFavorites(isFavorites.filter((item) => item.id !== product.id));
    alert(`${product.title} eliminado de favoritos`);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-7xl font-black w-full text-center mb-8">
        Favoritos
      </h1>
      <div className="flex flex-wrap gap-4 justify-items-center justify-center max-w-[1200px]">
        {isFavorites.length === 0 && <p>No hay favoritos</p>}
        {isFavorites.map((product, i) => (
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
                className="px-4 py-2 bg-red-500 rounded-lg font-black hover:bg-red-700 transition"
                onClick={() => handleRemoveFavorites(product)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const favorites = await getItems();

  return {
    props: {
      favorites: favorites,
    },
  };
}
