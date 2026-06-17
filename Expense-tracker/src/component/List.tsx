import { Trash2 } from "lucide-react";

interface prop {
  title: string;
  category: string;
  date: string;
  amount: string;
  id: number;
  deleteExpense: (id: number) => void;
}
const emoji: { [key: string]: string } = {
  Food: "🍕",
  Travel: "🚕",
  Shopping: "🛍️",
  Bills: "💡",
};

const List = ({ title, category, date, amount, id, deleteExpense }: prop) => {
  return (
    <div className="bg-bg px-3 pb-6">
      <div className="bg-surface w-[70%] h-[100px] flex flex-row p-3 items-center">
        <span className="text-[36px]">{emoji[category]}</span>
        <div className="flex flex-col ml-4 text-[18px] w-[40%]">
          <p className="text-text font-bold">{title}</p>
          <div className="flex flex-row mt-2">
            <span className="text-primary-light bg-bg px-4 py-1 rounded-full mr-3">
              {category}
            </span>
            <span className="text-muted">{date}</span>
          </div>
        </div>

        {/* Yeh andar hona chahiye */}
        <div className="flex flex-row items-center gap-3 ml-auto">
          <div className="text-expense font-bold">₹{amount}</div>
          <button
            className="text-border hover:text-expense border-2 border-border p-1 rounded-lg"
            onClick={() => deleteExpense(id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default List;
