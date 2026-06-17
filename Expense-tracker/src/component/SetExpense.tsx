interface prop {
  setshowmodel2: (tf: boolean) => void;
  totalamount: number;
  settotalamount: (amount: number) => void;
}

const SetExpense = ({ setshowmodel2, totalamount, settotalamount }: prop) => {
  return (
    <div className="bg-surface border border-border w-[30%] h-auto p-3 rounded-lg">
      <p className="text-text font-bold text-[24px]">Set monthly budget</p>
      <p className="text-primary font-bold">Budget Amount(₹)</p>
      <input
        type="text"
        className="bg-bg border border-border focus:border-primary text-text rounded-lg w-[70%] placeholder:text-muted p-2"
        placeholder="₹0.00"
        value={totalamount}
        onChange={(e) => {
          settotalamount(Number(e.target.value));
          localStorage.setItem("totalamount", e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") setshowmodel2(false);
        }}
      />
      <p className="text-muted text-sm">This will be your monthly budget</p>
      <div className="mt-4 mb-4 flex flex-row place-content-evenly">
        <button
          className="border border-border text-text font-bold text-[18px] hover:cursor-pointer border-3 p-2 rounded-lg hover:bg-bg"
          onClick={() => setshowmodel2(false)}
        >
          Cancel
        </button>
        <button
          className="border border-border text-text font-bold text-[18px] hover:cursor-pointer border-3 p-2 rounded-lg hover:bg-bg"
          onClick={() => setshowmodel2(false)}
        >
          Set budget
        </button>
      </div>
    </div>
  );
};

export default SetExpense;
