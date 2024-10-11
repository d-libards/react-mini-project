function Person({ name, image, age }) {
  return (
    <article className="person">
      <img src={image} alt="" className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  )
}
export default Person
