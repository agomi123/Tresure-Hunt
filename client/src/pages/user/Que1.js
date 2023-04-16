import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../styles/ques.css'
export default function Que1() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que1`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");
        navigate("/que2");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
      <h3>Challenge-1</h3>
      <Card className="maincon">
       <img className="im1" src={require("../../x/a.png")}></img>
        <Card.Body>
          {/* // <Card.Title>Problem-1</Card.Title> */}
          {/* //<Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle> */}
          <Card.Text>
          An exam was conducted and the following was analyzed. 4 men were able to check some exam papers in 8 days working 5 hours regularly. What is the total number of hours(hr) taken by 2 men in 20 days to check double the number of exam papers?
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
