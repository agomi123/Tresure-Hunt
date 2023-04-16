import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../../styles/Main.css'
export default function Dashboard() {
 
  const [score, setScore] = useState(0);

 const navigate = useNavigate();
  return (
    <>
    <div className='containe'>
      
      <h1 className='title1'>Welcome To The Hunting Zone...</h1>
       <img className='imgman' src={require("../../images/man.png")} align="right"></img>
       <h3 className='rules'>Important Rules before Playing the Game </h3>
       <i className="fa fa-hand-o-down" style={{fontSize:"27px",color:"red",marginTop:"30px"}}></i>
      <ol type="i">
          <li className='list1'>You will be asked 5 Random questions one after another.Which are Initial step of the game</li>
          <li className='list1'>10 points is awarded for the A correct answer to the problem. The More you do correct answer, the more you get the points</li>
          <li className='list1'>Be Careful attempting wrong answer Because <b>It may leads to DeadEnd so result to not able to participate next time in Future.</b></li>
          <li className='list1'>Each question has three options. You can choose only one options. Choosing Option is A very Cruicial Step . Pay More attention on IT</li>
          <li className='list1'>After Answering Maximum two wrong answer you will loose your teasure and Get a Lower rank among your friends</li>
          <li className='list1'>The result will be declared at the end of the Game</li>
      </ol>
      <p className='labels1'>Best of Luck!</p>
      {/* <p className='labels'>***Enter Your EmailId to Enter the Zone***</p>
      <form id="form">
         
          <input ref={inputRef} className="userid" type="text" placeholder='Your Registration Email ID*' />
      </form>
     */}
      {/* <div className='start'>
          <Link className='btn' to={'game'} onClick={startQuiz}>Start The Game</Link>
      </div> */}

  </div>
  <div class="d-grid gap-2 col-1 mx-auto mt-3">
      <button onClick={e => (
        e.preventDefault(),
        
        (async () => {
          
          // try {
          //   const res = await axios.get(`${process.env.REACT_APP_API}/score/user`);
          //   console.log(res.data);
               navigate('/que1');
          //   setScore(0); 
          //   const que = res.data.score + 1;
          //    console.log(que);
          //   if(res.data.score === 0){
              
          //     navigate('/que1');
          //   }
          //   else
          //   navigate(`/que${que}`);
          // } catch (error) {
          //   console.log(error);
          // }

        })()

        
        
      )} class="btn btn-dark" type="button"> Start </button>
      </div>

      <footer>
      <span>Created By <a href="https://www.linkedin.com/in/himanshudevop/" target="_blank">Himanshu Gupta</a> | <span
          class="fas fa-copyright"></span> 2023 All rights reserved.</span>
    </footer>
{/* 

      <Card className="container-fluid d-flex mt-3" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title className="fw-bold justify-content center text-center">Instructions</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
          <Card.Text className="mt-3 " style={{fontSize:"25px"}}>
           <p>1. Read and follow each clue carefully to discover the location of the next clue.</p>
           <p>2. Each clue may require different problem-solving techniques and may lead you to different sources such as texts, videos, 3D animations, games, links or anything else.</p>
            <p>3. Keep track of the clues and the sources used to solve them.</p>
           <p>4.  Pay attention to the details and clues hidden in each source as they may be lead to the dead ends.</p>
            <p>5. The final clue will lead you to the treasure. Once you reach the end of the game, you will have the opportunity to reflect on your soft skills and how you approached the challenges presented in the game.</p>
            Remember, the game is designed to assess your soft skills, so enjoy the adventure and challenge yourself. Good luck!
          </Card.Text>
        </Card.Body>
      </Card>
      
      <div class="d-grid gap-2 col-1 mx-auto mt-3">
      <button onClick={e => (
        e.preventDefault(),
        
        (async () => {
          
          try {
            const res = await axios.get(`${process.env.REACT_APP_API}/score/user`);
            console.log(res.data);

            setScore(res.data.score); 
            const que = res.data.score + 1;

            if(res.data.score === 0){
              
              navigate('/dashboard/que1');
            }
            else
            navigate(`/dashboard/que${que}`);
          } catch (error) {
            console.log(error);
          }

        })()

        
        
      )} class="btn btn-dark" type="button"> {score==0 ? "Start" : "Resume"}  </button>
      </div>
         */}
    </>
  );
}
