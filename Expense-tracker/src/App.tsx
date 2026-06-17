import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Buttons from "./component/Buttons";
import Addexpense from "./component/Addexpense";
// import List from "./component/List";
import { useState } from "react";
import Listgrid from "./component/Listgrid";
import SetExpense from "./component/SetExpense";

function App() {
  const [showmodel, setshowmodel] = useState(false);
  const [titleInput, settitleInput] = useState<string>("");
  const [amountInput, setamountInput] = useState<string>("");
  const [dateInput, setdateInput] = useState<string>("");
  const [category, setcategory] = useState<string>("");
  // const [expenses, setExpenses] = useState<
  //   {
  //     id: number;
  //     title: string;
  //     amount: string;
  //     date: string;
  //     category: string;
  //   }[]
  // >([]);
  const [showmodel2, setshowmodel2] = useState(false);
  // const [totalamount, settotalamount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [expenses, setExpenses] = useState<
    {
      id: number;
      title: string;
      amount: string;
      date: string;
      category: string;
    }[]
  >(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [totalamount, settotalamount] = useState<number>(() => {
    const saved = localStorage.getItem("totalamount");
    return saved ? JSON.parse(saved) : 0;
  });

  const addExpense = () => {
    const newExpense = {
      id: Date.now(),
      title: titleInput,
      amount: amountInput,
      date: dateInput,
      category: category,
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setshowmodel(false);
    settitleInput("");
    setamountInput("");
    setdateInput("");
  };

  const deleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((x) => x.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const amountSpent = () => {
    let sum: number = 0;
    for (let i = 0; i < expenses.length; i++) {
      sum += Number(expenses[i].amount);
    }
    return sum;
  };

  const remaining = (amountSpent: number) => {
    return totalamount - amountSpent;
  };

  const handleclick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredExpenses =
    selectedCategory === "" || selectedCategory === "All"
      ? expenses
      : expenses.filter((x) => x.category === selectedCategory);

  // useEffect(() => {
  //   localStorage.setItem("totalamount", JSON.stringify(totalamount));
  // }, [totalamount]);

  // useEffect(() => {
  //   const saved = localStorage.getItem("totalamount");
  //   if (saved) {
  //     settotalamount(JSON.parse(saved));
  //   }
  // }, []);

  return (
    <div className="bg-bg w-full min-h-screen">
      <Navbar setshowmodel={setshowmodel} setshowmodel2={setshowmodel2} />
      <Cards
        amountSpent={amountSpent}
        totalamount={totalamount}
        remaining={remaining(amountSpent())}
      />
      <Buttons handleClick={handleclick} />
      {showmodel && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <Addexpense
            setshowmodel={setshowmodel}
            titleInput={titleInput}
            settitleInput={settitleInput}
            amountInput={amountInput}
            setamountInput={setamountInput}
            dateInput={dateInput}
            setdateInput={setdateInput}
            setcategory={setcategory}
            addExpense={addExpense}
            category={category}
          />
        </div>
      )}
      <Listgrid
        expense={filteredExpenses}
        count={expenses.length}
        deleteExpense={deleteExpense}
      />
      {showmodel2 && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <SetExpense
            setshowmodel2={setshowmodel2}
            totalamount={totalamount}
            settotalamount={settotalamount}
          />
        </div>
      )}
    </div>
  );
}

export default App;
