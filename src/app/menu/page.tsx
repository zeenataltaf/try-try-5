import { foods } from "@/data/foods";
import FoodCard from "@/components/FoodCard";

export default function Menu() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}