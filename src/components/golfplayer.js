import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";

export default class PersonScore extends React.Component {
  state = {
    data: {
      name: "Diem",
      scores: [42,46,43,48]
    },
    scores: {},
    input2: "",
  };

  componentDidMount() {
    axios
      .get(`/api/HttpExample?name=Diem&scores=45,65,35,35`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // 'Content-Type': 'text/plain;charset=utf-8',
          // 'crossDomain': true
        },
      })
      .then((res) => {
        // debugger;
        console.log(res);
        const scores = res.data;
        this.setState({ scores: scores });
      });
    // const info = JSON.parse('{"name":"Diem","scores":["45","56","67","48"],"average":56,"handicap":16}');
    // this.setState({person: info})
    // debugger;
  }

  handleSubmitClick=async()=>{
    let newScore = this.state.input2
    let newData = this.state.data
    newData.scores.push(newScore)
    let data = await getPlayerStats(newData);
    console.log("gotResponse")
    console.log(data)
    if(data){
      let newState={...this.state}
      newState.data=data
      this.setState(newState)
      // this.forceUpdate()
      console.log("setState")
    }
  }

  render() {
    console.log(this.state);
    let data = this.state.data;
    //spit out array of all keys in object
    let keys = Object.keys(data);
    return (
      <>
        <nav></nav>
        <section>
          <h2>{data.name}</h2>
          {/* <input onChange={(e) => {
          console.log(e.target.value)
          this.setState({input:e.target.value})
        }}>
        </input>
        {
          this.state.input
        } */}
          <input
            value={this.state.input2}
            //anonymous function
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ input2: e.target.value });
            }}
          ></input>
          {this.state.input2}
          <button
          //named function (never call just give)
            onClick={this.handleSubmitClick}>
            Submit Score
          </button>
          {/* <input onChange = {(e)=>{
            console.log(e.target.value);
            this.setState({ input3: e.target.value });
          }}>
          </input>
          <button onClick ={()=>{
            let newState={...this.state}
            newState.data.scores.push(this.state.input3)
            this.setState(newState)
          }}> Add Score
          </button> */}
        </section>
        <section>
          {/* array of all keys of object */}
          {keys.length>0 && (
            <ul>
              {keys.map((key, index) => (
                <li key={index}>
                  {key}:{data[key]}
                </li>
              ))}
            </ul>
          )}
        </section>
        <section>Table</section>
      </>
    );
  }
}

async function getPlayerStats(data) {
  const params = new URLSearchParams({
    ...data,
  });
  const paramString = params.toString();
  //Prints "var1=value&var2=value2&arr=foo"
  return await axios
    .get(`/api/HttpExample?${paramString}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
      },
    })
    .then((res) => {
      // debugger;
      console.log(res);
      const scores = res.data;
      return scores;
    });
}
