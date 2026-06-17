import { Wallet, ArrowUpRight } from "lucide-react";

interface prop{
  amountSpent: () => number;
  totalamount:number;
  remaining: number;
}

const Cards = ({amountSpent,totalamount,remaining}:prop) => {
  return (
    <div className="flex flex-row m-10 place-content-evenly">
      <div className="bg-surface flex flex-col w-[33%] p-3 h-auto">
        <div className="text-primary-light flex flex-row justify-center">
          <Wallet />
          Total budget
        </div>
        <div className="text-text font-bold text-[32px] flex justify-center">
          ₹{totalamount}
        </div>
        <div className="text-primary-light m-2">This month</div>
        <div className="bg-border rounded-full h-1">
          <div className="bg-primary h-1 rounded-full w-[67%]"></div>
        </div>
      </div>

      <div className="bg-surface flex flex-col w-[33%] p-3 h-auto">
        <div className="text-primary-light flex flex-row justify-center">
          <ArrowUpRight />
          Total spent
        </div>
        <div className="text-expense font-bold text-[32px] flex justify-center">
          ₹{amountSpent()}
        </div>
        <div className="text-primary-light m-2">% spent</div>
        <div className="bg-border rounded-full h-1">
          <div className="bg-expense h-1 rounded-full w-[67%]"></div>
        </div>
      </div>

      <div className="bg-surface flex flex-col w-[33%] p-3 h-auto">
        <div className="text-primary-light flex flex-row justify-center">
          Remaining
        </div>
        <div className="text-text font-bold text-[32px] flex justify-center">
          ₹{remaining}
        </div>
        <div className="text-primary-light m-2">% left</div>
        <div className="bg-border rounded-full h-1">
          <div className="bg-primary h-1 rounded-full w-[67%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
