import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../styles/ques.css'
export default function Que5() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que5`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Congratulations! You have completed the game. Redirecting to score page in 5 seconds")

        setTimeout(function () {
        navigate("/score/user");
        
        }, 5000);
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
    <h3>Challenge-5</h3>
    <Card className="maincon">
     <img className="im1" src={require("../../x/e.jpg")}></img>
      <Card.Body>
        {/* // <Card.Title>Problem-1</Card.Title> */}
        {/* //<Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle> */}
        <Card.Text>
        ‘You have 1000 add 40 riddle’ is so popular these days.⭐️

Note: This must be done in your head. It isn’t easy as you think. Try it!
        </Card.Text>
      </Card.Body>
    </Card>

    <form onSubmit={handleSubmit} >
      <div className="ipt">
        <label htmlFor="answer"></label>
        <input
          type="text"
          className="ip1"
          id="answer"
          placeholder="Enter your answer"
        />
      </div>
      <button type="submit" className="bt">
        Submit
      </button>
    </form>
  </div>
  );
}
