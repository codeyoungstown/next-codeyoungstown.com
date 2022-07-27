export default function Search({ handleSearch, handleSubmit }) {
  return (
    <div>
      <input
        className="text-black"
        type="search"
        placeholder="company name"
        onChange={handleSearch}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
