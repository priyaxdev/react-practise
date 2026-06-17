import { Plus } from "lucide-react";

interface prop {
  setshowmodel:(model:boolean)=>void;
  setshowmodel2:(tf:boolean)=>void;
}

function Navbar({ setshowmodel,setshowmodel2 }: prop) {
  return (
    <nav className="bg-card w-full px-6 py-4 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-2">
        <span className="text-primary text-2xl font-bold">rupee</span>
        <span className="text-text text-2xl font-bold">track</span>
      </div>

      <button
        className="flex items-center gap-2 bg-primary text-bg px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light transition-colors duration-200 hover:cursor-pointer ml-auto"
        onClick={()=>setshowmodel2(true)}
        
      >
        <Plus size={16} />
        Set Budget
      </button>

      <button
        className="flex items-center gap-2 bg-primary text-bg px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light transition-colors duration-200 hover:cursor-pointer ml-2"
        onClick={() => setshowmodel(true)}
      >
        <Plus size={16} />
        Add expense
      </button>
    </nav>
  );
}

export default Navbar;
