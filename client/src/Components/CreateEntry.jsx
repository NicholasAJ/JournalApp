import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const CreateEntry = (props) => {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryBody, setEntryBody] = useState("")
  // const [entryDate, setEntryDate] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const submitEntry = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/entry/new",
      {entryTitle, entryBody})
      .then((res)=> {
        console.log(res.data);
        navigate(`/entry/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
        console.log('Catch Create Clientside')
        setErrors(err.response.data.errors);
      });
  };

  return(
    <div>
      <h1>Let's Journal!</h1>
      <div>
        <p>Let's write an entry</p>
        <form onSubmit={submitEntry}>
          <lable>Title</lable>
          {errors.entryTitle ? <p>{errors.entryTitle.message}</p> : null}
          <input
            type="text"
            name="entryTitle"
            onChange={(e) => setEntryTitle(e.target.value)}
            value={(entryTitle)}
          />
          <lable>Entry</lable>
          <input
            type="text"
            name="entryBody"
            onChange={(e) => setEntryBody(e.target.value)}
            value={(entryBody)}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;