function Checkbox() {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="normal-checkbox"
        className="accent-[#c92071] w-5 h-5"
      />
      <label htmlFor="normal-checkbox" className="text-sm select-none">
        Marcar item
      </label>
    </div>
  );
}

export default Checkbox;
