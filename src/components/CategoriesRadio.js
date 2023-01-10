const CategoriesRadio = (props) => {
  const handleChange = (event) => {
    props.setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h3>Categories:</h3>
      <form className="flex flex-col gap-1">
        <div key="All" className="form-control">
          <label className="cursor-pointer">
            <span className="label-text">All</span>
            <input
              className="radio checked:bg-blue-500"
              type="radio"
              value="All"
              checked={props.selectedCategory === "All"}
              onChange={handleChange}
            />
          </label>
        </div>
        {props.categories.map((category) => (
          <div className="form-control" key={category}>
            <label className="cursor-pointer">
              <span className="label-text">{category}</span>
              <input
                className="radio checked:bg-blue-500"
                type="radio"
                value={category}
                checked={props.selectedCategory === category}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CategoriesRadio;
