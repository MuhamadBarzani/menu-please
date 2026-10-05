import FoodCard from "../components/ui/ItemCard";
import type { Food } from "../types/food";

export default function Home() {
  const mockFood: Food[] = [
    {
      id: "1",
      name: "burger 1",
      price: 5,
      image:
        "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      category: "burgers",
    },
    {
      id: "2",
      name: "burger 2",
      price: 5,
      image:
        "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      category: "burgers",
    },
    {
      id: "3",
      name: "burger 3",
      price: 5,
      image:
        "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      category: "burgers",
    },
    {
      id: "4",
      name: "burger 4",
      price: 5,
      image:
        "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      category: "burgers",
    },
    {
      id: "5",
      name: "burger 5",
      price: 8,
      image:
        "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      category: "burgers",
    },
    {
      id: "6",
      name: "burger 6",
      price: 2,
      image:
        "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      category: "burgers",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-5 sm:justify-start sm:gap-4">
      {mockFood.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
