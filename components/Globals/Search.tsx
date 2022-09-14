interface SearchProps {
  handleSearch: any;
  handleSubmit?: any;
  placeHolder: string;
}

export default function Search({
  handleSearch,
  handleSubmit,
  placeHolder,
}: SearchProps) {
  return handleSubmit ? (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex justify-center w-full mx-4">
        <input
          className="text-black rounded-l-lg w-full sm:w-80"
          type="search"
          placeholder={placeHolder}
          onChange={handleSearch}
        />
      </form>
      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-400 px-4 rounded-r-lg h-full"
      >
        SUBMIT
      </button>
    </div>
  ) : (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex justify-center w-full mx-4">
        <input
          className="text-black rounded-lg w-full sm:w-80"
          type="search"
          placeholder={placeHolder}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
