import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/About.css';
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <>
    <div className='abt'><h1 className='abs'>About Section</h1></div>
      <div className='contine'>
        <div className='ptr'>
        <p className='pl'>👉The aim of puzzle is to assess the soft skills of its users</p>
         <p className='pl'>👉The soft skills to be assessed by the puzzle can be chosen by users</p>
        <p className='pl'>👉A Interactive Puzzle is a game in which the organizers prepare a list defining specific items, which the participants seek to gather or complete all items on the list, usually without purchasing them. Usually participants work in small teams, although the rules may allow individuals to participate. The goal is to be the first to complete the list or to complete the most items on that list. In variations of the game, players take photographs of listed items or be challenged to complete the tasks on the list in the most creative manner. A treasure hunt is another name for the game, but it may involve following a series of clues to find objects or a single prize in a particular order.</p>
        
        </div>
        {/* <img className='mer' src='./ikl.png'></img> */}
        <img src= {require("../images/ikl.png")} className='mer' ></img>
        </div>
        <div class="d-grid gap-2 col-1 mx-auto mt-3">
        <button onClick={e => (
          e.preventDefault(),
             (async () => {navigate(`/`);
          })())} class="btn btn-dark" type="button" style={{marginBottom:"20px"}}> Back To Home  </button>
      </div>
    </>
  //   <Card className="text-center fs-3">
  //   <Card.Header>About</Card.Header>
  //   <Card.Body>
  //     <Card.Title>Puzzle-Game</Card.Title>
  //     <Card.Text style={{fontFamily: "Lucida Console Courier New monospace" , }} className='container '>
  //      <p> Our puzzle is simple yet challenging, and it involves finding hidden clues and treasures by following a trail of clues. Each clue will lead you to the next one, and the final clue will lead you to the treasure. The clues can be in the form of simple text, videos, 3D animations, games, links, or anything else that you have to find or solve.</p>
  //       We have designed the clues to test specific soft skills, and by solving each one, you will demonstrate your proficiency in that particular skill. You can expect to encounter a variety of challenges that will require you to think outside the box and be creative in your approach.
  //       Our website is easy to navigate and user-friendly, with clear instructions on how to play the game and how to progress through the clues. We have also included clues that may lead you outside of our website, such as to an Instagram post or a YouTube video, so be prepared to explore beyond our website.
  //       We hope that you enjoy playing our interactive puzzle and that it helps you develop and showcase your soft skills.
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Footer className="text-muted"> Good luck on your treasure hunt   ~ Abhishek Rawat</Card.Footer>
  // </Card>
  )
}

export default About