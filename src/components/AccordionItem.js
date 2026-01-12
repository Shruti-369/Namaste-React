import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const AccordionItem = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div className="border w-[90%] !ml-auto !mr-auto m-6 border-white shadow-sm shadow-orange-300 py-4 px-5 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:border-orange-300 hover:bg-orange-50 focus:outline focus:outline-2 focus:outline-orange-500 focus:outline-offset-2">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center "
      >
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="mt-3 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-gray-700 text-sm px-2 py-1"
            >
              <span>{item.name}</span>
              <span className="mr-2  ml-[540px]">₹{item.price}</span>
              <button 
              className="text-white p-2 border rounded-lg bg-orange-500 hover:focus:ring-1 ring-gray-400 active:scale-95 transition-transform leading-tight"
              // onClick={handleAddItem}
              // onClick={handleAddItem(item)}
              onClick={() => handleAddItem(item)}>
                ADD+
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
