import { FiCalendar } from "react-icons/fi";

export function SelectDatesButton() {
  return (
    <button
      className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 font-medium text-base hover:bg-gray-50 transition"
      type="button"
    >
      <FiCalendar className="text-xl" />
      Select dates
    </button>
  );
}
