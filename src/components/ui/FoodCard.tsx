import type { Food } from "../../types/food";

type props = {
  food: Food;
};
export default function FoodCard({ food }: props) {
  return (
    <div className="inline-flex flex-col items-center justify-center p-2 bg-primary my-border">
      <img
        className="mb-5 size-30 sm:size-50 object-cover rounded-md"
        src={food.image}
        alt=""
      />
      <div className="flex justify-between w-full px-2">
        <p className="text-2xl">{food.name}</p>
        <p className="text-2xl">{food.price}$</p>
      </div>
    </div>
  );
}
