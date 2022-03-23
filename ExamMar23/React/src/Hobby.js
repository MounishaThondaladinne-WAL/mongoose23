import { useState, useEffect } from "react";
import axios from "axios";
const Hobby = () => {
  let [hobby, setHobby] = useState([
    {
      name: "",
      description: "",
      doc: "",
    },
  ]);
  useEffect(() => {
    gethobbys();
  }, []);
  const gethobbys = () => {
    axios
      .get("/hobby")
      .then((res) => {
        setHobby(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let addhobby = (event) => {
    event.preventDefault();
    let hobbyObject = {
      name: event.target.name.value,
      description: event.target.description.value,
      doc: event.target.doc.value,
    };
    axios
      .post("/hobby", hobbyObject)
      .then((res) => {
        gethobbys(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteHobby = (_id) => {
    axios
      .delete("/hobby/" + _id)
      .then((res) => {
        setHobby([]);
      })
      .catch((error) => {
        console.log(error);
      });
    gethobbys();
  };

  return (
    <div>
      <h2>Hobbies Application</h2>
      <form onSubmit={addhobby}>
        <input type='text' name='name' placeholder='Hobby name' />
        <br />

        <textarea name='description' placeholder='About hobby' />
        <br />
        <label>Date Of Creation</label>
        <br />
        <input type='date' name='doc' />
        <br />

        <button className='btn1'>Add Hobby</button>

        <br />
      </form>

      {hobby.map((val, index) => {
        return (
          <div className='showp'>
            <b>hobby Name:</b>
            {val.name}
            <br />
            <b>About:</b>
            {val.description}
            <br />
            <b>Date Of Creation:</b>
            {val.doc}
            <br />

            <button className='btn1' onClick={() => deleteHobby(index)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Hobby;
