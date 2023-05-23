const Person = ({ id, image, age, name, removePerson }) => {
    return (
        <article className="person">
           <div className="img-container">
             <img className="person-img" src={image} alt={name} />
           </div>
            <div className="person-info">
                <p className="person-description"><span>name</span>{name}</p>
                <p className="person-description"><span>age</span>{age}</p>
                <button className="btn" onClick={() => removePerson(id)}>delete</button>
            </div>
        </article>
    )
}
export default Person
