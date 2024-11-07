// CardDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface Shoe {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const shoesData: Shoe[] = [
  {
    id: 1,
    name: 'Air Max 270',
    description: 'Lightweight and stylish with a responsive sole for maximum comfort.',
    price: 150,
    imageUrl: 'https://example.com/images/airmax270.jpg',
  },
  {
    id: 2,
    name: 'Nike React Infinity Run',
    description: 'Built for everyday runs, featuring soft foam for a comfortable ride.',
    price: 160,
    imageUrl: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=',
  },
  {
    id: 3,
    name: 'Nike Ultraboost',
    description: 'A versatile running shoe that combines comfort with energy return.',
    price: 180,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
  },
];

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const shoe = shoesData.find((shoe) => shoe.id === parseInt(id || '', 10));

  if (!shoe) {
    return <p className="text-center mt-8 text-red-500">Shoe not found</p>;
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-2xl font-bold">{shoe.name}</h1>
      <img src={shoe.imageUrl} alt={shoe.name} className="w-64 h-64 object-cover rounded-lg shadow-md" />
      <p className="text-gray-700">{shoe.description}</p>
      <p className="text-lg font-semibold text-green-500">${shoe.price}</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4">
        Go back
      </Link>
    </div>
  );
};

export default CardDetail;
