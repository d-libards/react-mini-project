import Person from './Person'

function List({ people }) {
  return (
    <section>
      {people.map((person) => (
        <Person {...person} key={person.id} />
      ))}
    </section>
  )
}
export default List
