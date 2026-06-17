interface prop {
  setshowmodel: (model: boolean) => void;
  titleInput: string;
  settitleInput: (name: string) => void;
  amountInput: string;
  setamountInput: (name: string) => void;
  dateInput: string;
  setdateInput: (name: string) => void;
  setcategory: (name: string) => void;
  addExpense: () => void;
  category: string;
}

const Addexpense = ({
  setshowmodel,
  titleInput,
  settitleInput,
  amountInput,
  setamountInput,
  dateInput,
  setdateInput,
  setcategory,
  addExpense,
  category,
}: prop) => {
  return (
    <div className="bg-surface w-[50%] h-auto rounded-lg border-border border-2 p-3">
      <div className="font-bold text-text">Add New Expense</div>
      <div className="flex flex-col text-muted">
        Title
        <input
          type="text"
          className="w-[90%] h-[2.5rem]  border bg-bg rounded-lg border-border focus:border-primary text-text placeholder:text-muted p-2 m-2"
          value={titleInput}
          onChange={(e) => settitleInput(e.target.value)}
          placeholder="e.g. Domino's Pizza"
        />
      </div>
      <div className="flex flex-row place-content-between">
        <div className="flex flex-col text-muted">
          Amount
          <input
            type="text"
            className=" h-[2.5rem] bg-bg border  rounded-lg border-border focus:border-primary text-text placeholder:text-muted p-2"
            value={amountInput}
            onChange={(e) => setamountInput(e.target.value)}
            placeholder="0.00"
          />
        </div>
        <div className="flex flex-col text-muted">
          Date
          <input
            type="text"
            className="h-[2.5rem] bg-bg  border rounded-lg border-border focus:border-primary text-text placeholder:text-muted p-2"
            value={dateInput}
            onChange={(e) => setdateInput(e.target.value)}
            placeholder="15/06/2026"
          />
        </div>
      </div>
      <p className="text-muted">Category</p>
      <div className="flex flex-row place-content-evenly m-3">
        <button
          className={`${category === "Food" ? "bg-primary-dark" : "bg-bg"} border border-primary text-primary-light font-bold text-[18px] w-[25%] h-[4rem] p-1 hover:cursor-pointer rounded-lg flex flex-col ml-2`}
          onClick={() => setcategory("Food")}
        >
          <p>🍕 </p>
          <p>Food</p>
        </button>
        <button
          className={`${category === "Travel" ? "bg-primary-dark" : "bg-bg"} border border-primary text-primary-light font-bold text-[18px] w-[25%] h-[4rem] p-1 hover:cursor-pointer rounded-lg flex flex-col ml-2`}
          onClick={() => setcategory("Travel")}
        >
          <p>🚕</p>
          <p>Travel</p>
        </button>
        <button
          className={`${category === "Shopping" ? "bg-primary-dark" : "bg-bg"} border border-primary text-primary-light font-bold text-[18px] w-[25%] h-[4rem] p-1 hover:cursor-pointer rounded-lg flex flex-col ml-2`}
          onClick={() => setcategory("Shopping")}
        >
          <p>🛍️</p>
          <p>Shopping</p>
        </button>
        <button
          className={`${category === "Bills" ? "bg-primary-dark" : "bg-bg"} border border-primary text-primary-light font-bold text-[18px] w-[25%] h-[4rem] p-1 hover:cursor-pointer rounded-lg flex flex-col ml-2`}
          onClick={() => setcategory("Bills")}
        >
          <p>💡</p>
          <p>Bills</p>
        </button>
      </div>
      <div className="flex flex-row place-content-evenly">
        <button
          className="border-border text-muted border-2 p-3 rounded-lg font-bold text-text text-[18px] hover:cursor-pointer hover:bg-surface hover:text-text hover:border-muted"
          onClick={() => setshowmodel(false)}
        >
          Cancel
        </button>
        <button
          className="border-border text-muted border-2 p-3 rounded-lg font-bold text-text text-[18px] hover:cursor-pointer hover:bg-surface hover:text-text hover:border-muted "
          onClick={addExpense}
        >
          + Add Expense
        </button>
      </div>
    </div>
  );
};

export default Addexpense;
