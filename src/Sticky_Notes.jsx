import { useRef, useState } from "react"
import Card from "./Card"
import get_free_space from "./utils";

function Sticky_Notes() {
    // const [count,setCount]=useState(0);
    const allLocations = useRef([]);
    const [noteText, setNoteText] = useState("");
    const [notes, setNotes] = useState([]);
    function handleAddNote() {
        let allOccupiedLocations = allLocations.current.map((el) => el.cordinates)
        let loc = get_free_space(allOccupiedLocations);
        if(!loc){
            return;
        }
        // console.log(loc);
        // console.log(allLocations)
        setNotes([...notes, { cordinates: { x: loc.random_num_x, y: loc.random_num_y, height: 200, width: 300 }, text: noteText }])
        allLocations.current.push({ cordinates: { x: loc.random_num_x, y: loc.random_num_y, height: 200, width: 300 }, text: noteText });
        console.log("Done", noteText)
    }
    return (
        <div className="main">
            <div id="top">
                <input type="text" value={noteText} onChange={(e) => {
                    setNoteText(e.target.value)
                }} />
                <button onClick={() => {
                    handleAddNote()
                }}>Add</button>
            </div>
            <div>
                {
                    notes.map((el, ix) => {
                        return <Card cordinates={el.cordinates} text={el.text} allLocations={allLocations} index={ix} />
                    })
                }

            </div>
        </div>
    )
}

export default Sticky_Notes