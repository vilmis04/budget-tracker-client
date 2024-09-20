import { Plus } from "../assets/icons/Plus";

export const AddEntryButton = () => (
  <button
    className="z-fab fixed p-8 h-8 w-8 rounded-full border-app-color-danger border border-solid bottom-4 right-4 flex justify-center items-center"
    onClick={() => console.log("Add new data")}
  >
    <div className="scale-150">
      <Plus />
    </div>
  </button>
);
