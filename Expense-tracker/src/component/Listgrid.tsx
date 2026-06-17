import List from "../component/List";

interface List {
  id:number;
  title: string;
  category: string;
  date: string;
  amount: string;
}

interface prop {
  expense: List[];
  count:number;
  deleteExpense:(id:number)=>void;
}

const Listgrid = ({ expense,count,deleteExpense }: prop) => {
  return (
    <>
      <div className="flex place-content-between mb-3 ">
        <span className="text-text font-bold text-[18px] ml-3">Recent Expenses</span>
        <span className="text-muted bg-surface rounded-full px-4 py-1 mr-3">
          {count} items
        </span>
      </div>
      <div className="grid grid-row  px-6 py-4">
        {expense.map((x) => (
          <List
            key={x.id}
            id={x.id}
            title={x.title}
            category={x.category}
            date={x.date}
            amount={x.amount}
            deleteExpense={deleteExpense}
          />
        ))}
      </div>
    </>
  );
};

export default Listgrid;
