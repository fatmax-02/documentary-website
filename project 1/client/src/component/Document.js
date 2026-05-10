import React, {useState} from 'react'
import axios from 'axios'
import img from '../component/img.png';
import car from '../component/car.png';
import anmal from '../component/anmal.png';
import dia from '../component/dia.jpeg';
import ins from '../component/ins.png';
import kill from '../component/kill.png';
import space from '../component/space.png';
import sea from '../component/sea.png';
import mini from '../component/mini.jpeg';
import mys from '../component/mys.png';

const Document = () => {
    const [comment, setcomment] = useState(""); 
    const [resMsg, setresMsg] = useState(""); 
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedQuality, setSelectedQuality] = useState("");
    const [isFree, setIsFree] = useState(false);
    const [releaseDate, setReleaseDate] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const newComment = () => { 
        axios 
          .post("http://localhost:4005/addcomment", { 
            comment: comment,
          }) 
          .then((res) => { 
            setresMsg(res.data); 
          }) 
          .catch((err) => { 
            console.log(err); 
          }); 
    };

  return (
    <div>
        <div><br/><br/>
        <p class="h22">" Here You Find Knowledge "</p>
        </div>

        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', margin: '20px' }}>
          <h3>Filter Documentaries</h3>
          
          {/* DropDown */}
          <select style={{ margin: '10px', padding: '8px', width: '200px' }} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option>All Categories</option>
            <option>Nature</option>
            <option>History</option>
            <option>Space</option>
            <option>Crime</option>
          </select>

          {/* Radio Buttons */}
          <div style={{ margin: '10px' }}>
            <label style={{ fontSize: '16px' }}>
              <input type="radio" name="quality" onChange={() => setSelectedQuality("HD")} /> HD
            </label>
            <label style={{ fontSize: '16px', marginLeft: '15px' }}>
              <input type="radio" name="quality" onChange={() => setSelectedQuality("Full HD")} /> Full HD
            </label>
            <label style={{ fontSize: '16px', marginLeft: '15px' }}>
              <input type="radio" name="quality" onChange={() => setSelectedQuality("4K")} /> 4K
            </label>
          </div>

          {/* Checkbox */}
          <div style={{ margin: '10px' }}>
            <label style={{ fontSize: '16px' }}>
              <input type="checkbox" onChange={(e) => setIsFree(e.target.checked)} /> Show only free documentaries
            </label>
          </div>

          {/* Date Picker */}
          <div style={{ margin: '10px' }}>
            <label style={{ fontSize: '16px' }}>Release Date: </label>
            <input type="date" style={{ marginLeft: '10px', padding: '8px', width: '200px' }} onChange={(e) => setReleaseDate(e.target.value)} />
          </div>

          {/* Search Box */}
          <div style={{ margin: '10px' }}>
            <input type="text" placeholder="Search documentaries..." style={{ padding: '8px', width: '300px', borderRadius: '20px', border: '1px solid #ccc' }} onChange={(e) => setSearchTerm(e.target.value)} />
            <button style={{ marginLeft: '10px', padding: '8px 20px', backgroundColor: '#d32a46', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => alert("Searching for: " + searchTerm)}>Search</button>
          </div>
        </div>

        <div> <br/><br/>
        <ul class=" row1">
            <li class="ss">{'>'}</li>

            <li class=" col1">
            <a href='https://youtu.be/tRRoYeKztbY?si=RY7DbXE10fCBhSTN' > <img src={img} alt="Superfoods – is healthy eating just hype? | DW Documentary" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/ErPsyBUCijM?si=EyOcO4yAFw8YRBIs' > <img src={sea} alt="Legend of Atlantis (Full Episode) | Drain the Oceans" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/egDIqKLt2L4?si=RLC5KdatJNJ7C5Ld' > <img src={space} alt="Mysteries of the Universe | Space Documentary 2023" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/CEqoCcacR3Y?si=WaETTLXZiQaHpeQq' > <img src={ins} alt="" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/MkkLOLXLLpY?si=h37ImGoVhqHaqekK' > <img src={dia} alt="The Life of Princess Diana" height="150"></img></a>
            </li>
        </ul>
        </div>

        <div> <br/><br/><br/><br/>
        <ul class=" row1">
            <li class="ss">{'>'}</li>

            <li class=" col1">
            <a href='https://youtu.be/J8DGjUv-Vjc?si=Vk3Mo3qvJvBwW6Kd' > <img src={mini} alt="MINIMALISM: Official Netflix Documentary" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/TWLyRQbvr6o?si=CQYMcde2eXks5f8V' > <img src={car} alt="THE SECRETS OF LUXURY SEDANS: How S-Class, Maybach and EQS are made | WELT Documentary" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/opGsoygtcmk?si=CxfFX_gN2T0JH9N4' > <img src={anmal} alt="WILD COLOMBIA | Survival Battles in the Realm of Giants | Animal documentary" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/ncOr6JSTMlw?si=2jZackLnPsT1dZRt' > <img src={mys} alt="" height="150"></img></a>
            </li>
            <li class=" col1">
            <a href='https://youtu.be/vx878uqVzYU?si=aPnpSjit5lxN86WQ' > <img src={kill} alt="The Horrific Acts of Michael Bruce Ross - The Roadside Strangler. | Serial Killer Documentary" height="150"></img></a>
            </li>
        </ul>
        </div>

        <br/><br/><br/><br/><br/><br/>

        <div>
            <form class="comment bg-light">
                <p class="p">Happy to read your comment!</p>
                <textarea rows="4" class="form-control"
                         onChange={(e) => setcomment(e.target.value)} ></textarea> 
                <br/>
                <button type='button' onClick={newComment} class="btn btn-danger">Submit</button>
            </form>
            <div> <br/>
                <h3 class="logh3">{resMsg}</h3>
            </div>

        </div>
        

        <br/><br/><br/><br/><br/>
    </div>
  )
}

export default Document
