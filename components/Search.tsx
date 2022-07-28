export default function Search({ handleSearch, handleSubmit, placeHolder }) {
  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex justify-center w-full mx-4">
        <input
          className="text-black rounded-l-lg w-full sm:w-80"
          type="search"
          placeholder={placeHolder}
          onChange={handleSearch}
        />
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-400 px-4 rounded-r-lg h-full"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
