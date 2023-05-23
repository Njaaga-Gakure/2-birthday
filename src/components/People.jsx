import Person from "./Person"
const People = ({people, deleteAll, restore, removePerson}) => {
return (
    <main>
        <div className="center-container">
          <section className="people">
           {people.map(person =>  <Person key={person.id} {...person} removePerson={removePerson}/>)}
           {people.length > 0 ? 
            <button onClick={deleteAll} className="btn">delete all</button>: 
            <button onClick={restore} className="btn">restore</button>}
          </section>
         
        </div>
    </main>
)

}

export default People