const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizza-card">
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>Ingredients: {pizza.ingredients.join(", ")}</p>
      <p>Price: ${pizza.price}</p>
      <button>Order Now</button>
    </div>
  );
};

export default PizzaCard;
