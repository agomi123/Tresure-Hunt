import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../styles/ques.css'
export default function Que7() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que7`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        setTimeout(function () {
          window.location.reload();
        }, 1000);
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
      <h3>Challenge-7</h3>
      <Card className="maincon">
       <img className="im1" src={require("../../x/g.jpg")}></img>
        <Card.Body>
          {/* // <Card.Title>Problem-1</Card.Title> */}
          {/* //<Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle> */}
          <Card.Text>
          Mr Smith has 4 daughters. Each of his daughters has a brother. How many children does Mr Smith have? 🧒
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
