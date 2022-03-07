import {useState} from 'react';

const ANIMALS = ["bird","rabbit","cat","dog"];

const SearchParams = () => {
    // const location = "Seattle, WA";
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = ["poodle","bichon"];
    return(
        <div>
            <form>
                <label htmlFor="location">Location
                <input id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                </label>
                <br /><br />
                <label htmlFor="animal">
                    animal
                    <select 
                    id="animal" 
                    value={animal} 
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }} 
                    onBlur={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }} 
                    >
                        <option />
                        {ANIMALS.map((animal) => {
                            return(
                                <option key={animal} value={animal}>
                                 {animal}
                                </option>
                            );

                        })}
                    </select>
                     
                </label>
                        <br /><br />
                <label htmlFor="breed">
                      breed
                    <select 
                    id="breed" 
                    value={breed} 
                    onChange={(e) => {
                        setBreed(e.target.value);
                    }} 
                    onBlur={(e) => {
                        setBreed(e.target.value);
                    }} 
                    >
                        <option />
                        {breeds.map((Allbreed) => {
                            return(
                                <option key={Allbreed} value={Allbreed}>
                                 {Allbreed}
                                </option>
                            );

                        })}
                    </select>
                     
                </label>
                <br /><br />
                <button>Submit</button>
                <div><h3>{location}</h3></div>
            </form>
        </div>
    );   
}

export default SearchParams;