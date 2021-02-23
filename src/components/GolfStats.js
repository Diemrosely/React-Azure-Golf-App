import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import {cloneDeep} from "lodash";

export default class PersonScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "Diem",
        scores: [42, 46, 43, 48],
      },
      scores: {},
      input2: "",
    };
  }

  componentDidMount() {
    axios
      .get(`/api/HttpExample?name=Diem&scores=45,65,35,35`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        // debugger;
        this.setState({ data: res.data });
      });
  }

  handleSubmitClick = async () => {
    let newScore = this.state.input2;
    if(!validateStatInput(newScore)){
        alert('Please enter valid input') 
        return;
    }
    let newData = cloneDeep(this.state.data);
    // let newData = [...this.state.data];
    newData.scores.push(newScore);
    let data = await updatePlayerStats(newData);
    console.log("gotResponse");
    console.log(data);
    if (data && !data.error) {
      let newState = { ...this.state };
      newState.data = data;
      this.setState(newState);
      // this.forceUpdate()
    }else if(data){
        alert(data.error)
        return;
    }
  };

  render() {
    console.log(this.state);
    let data = this.state.data;
    //spit out array of all keys in object
    let keys = Object.keys(data);
    return (
      <>
        <nav></nav>

        <section className="flexColumn">
          <div className="grayBack userName">{data.name}</div>
          <br></br>
          <div>
            <input
              value={this.state.input2}
              //anonymous function
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ input2: e.target.value });
              }}
            ></input>
            <input className='jura'
              type="button"
              value="Submit Score"
              //named function (never call just give)
              onClick={this.handleSubmitClick}
            ></input>
          </div>
        </section>

        <section className="lilboxSection">
          {/* array of all keys of object */}
          {this.state.data.scores.map((item, index) => {
            return (
              <div key={index} className="lilbox">
                {" "}
                {item}
              </div>
            );
          })}
        </section>
        <section className="lilboxSection">
          <div className="bigBox">
            <h4>
              Average Score:<br></br> {this.state.data.average}{" "}
            </h4>
          </div>
          <div className="bigBox">
            <h4>
              Handicap Score: <br></br> {this.state.data.handicap}{" "}
            </h4>
          </div>
        </section>
      </>
    );
  }
}

async function updatePlayerStats(data) {
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


function validateStatInput(input){
    let trimmed = input.trim()
    let num = parseInt(trimmed)
    let type = typeof num
    
	console.log(trimmed, num, type, type !== 'number')
  
  	if(trimmed.length == 0 ){
        return false;
    } else if(isNaN(num)){
        return false;
    } 
    return true;
}