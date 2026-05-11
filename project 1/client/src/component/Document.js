import React, { useState } from 'react'
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
    const [searchTerm, setSearchTerm] = useState("");

    // List of documentaries with titles and categories
    const documentaries = [
        { id: 1, title: "Superfoods – is healthy eating just hype?", category: "Nature", img: img, link: "https://youtu.be/tRRoYeKztbY" },
        { id: 2, title: "Legend of Atlantis | Drain the Oceans", category: "History", img: sea, link: "https://youtu.be/ErPsyBUCijM" },
        { id: 3, title: "Mysteries of the Universe | Space Documentary", category: "Space", img: space, link: "https://youtu.be/egDIqKLt2L4" },
        { id: 4, title: "The Life of Princess Diana", category: "History", img: dia, link: "https://youtu.be/MkkLOLXLLpY" },
        { id: 5, title: "MINIMALISM: Official Netflix Documentary", category: "Lifestyle", img: mini, link: "https://youtu.be/J8DGjUv-Vjc" },
        { id: 6, title: "THE SECRETS OF LUXURY SEDANS", category: "Technology", img: car, link: "https://youtu.be/TWLyRQbvr6o" },
        { id: 7, title: "WILD COLOMBIA | Animal documentary", category: "Nature", img: anmal, link: "https://youtu.be/opGsoygtcmk" },
        { id: 8, title: "Serial Killer Documentary", category: "Crime", img: kill, link: "https://youtu.be/vx878uqVzYU" }
    ];

    // Filter documentaries based on search term and category
    const filteredDocs = documentaries.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || doc.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const newComment = () => { 
        axios 
          .post(`${process.env.REACT_APP_API_URL}/addcomment`, { 
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

        {/* Filter Section */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', margin: '20px' }}>
          <h3>Filter Documentaries</h3>
          
          {/* Search Box */}
          <div style={{ margin: '10px' }}>
            <input 
              type="text" 
              placeholder="Search documentaries..." 
              style={{ padding: '8px', width: '300px', borderRadius: '20px', border: '1px solid #ccc' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* DropDown Category */}
          <select 
            style={{ margin: '10px', padding: '8px', width: '200px' }} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Nature</option>
            <option>History</option>
            <option>Space</option>
            <option>Crime</option>
            <option>Technology</option>
            <option>Lifestyle</option>
          </select>

          <p style={{ marginTop: '10px', color: '#333' }}>
            Found {filteredDocs.length} documentaries
          </p>
        </div>

        {/* Display Filtered Documentaries */}
        <div>
          <ul class="row1">
            {filteredDocs.map((doc) => (
              <li key={doc.id} class="col1">
                <a href={doc.link}>
                  <img src={doc.img} alt={doc.title} height="150" />
                  <p style={{ color: '#fff', fontSize: '12px', textAlign: 'center' }}>{doc.title.substring(0, 40)}...</p>
                </a>
              </li>
            ))}
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
    </div>
  )
}

export default Document
