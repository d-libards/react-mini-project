function Categories({ handleCategory, categories }) {
  return (
    <div className="btn-container ">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => handleCategory(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
