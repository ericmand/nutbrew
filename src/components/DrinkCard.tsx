interface DrinkCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function DrinkCard({ name, description, price, image }: DrinkCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-amber-700 font-bold">{price}</p>
      </div>
    </div>
  );
}