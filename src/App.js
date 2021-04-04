import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    fullName:"Maher Sami",
    bio :"29 years old",
    imgSrc:"https://www.pngrepo.com/png/168246/512/avatar.png",
    profession:"Full stack developer",
    show:true,
    display:()=>{
      return this.state.show===true ? "block":"none"
    },
    duration:1
  };
  

  componentDidMount() {
    setInterval(
      () => this.setState({...this.state,duration:this.state.duration+1}),
      1000
    );
  }

  handleClick=()=>this.setState({...this.state,show:!this.state.show});
  render(){
  
    console.log(this.state)
  return (
    
  <>
  <div className="card-container">
    <div style={{display:this.state.display()}}>
      <span className="pro">PRO</span>
      <img className="round" src={this.state.imgSrc} alt="user" />
      <h3>{this.state.fullName}</h3>
      <h6>{this.state.bio}</h6>
      <p>{this.state.profession}</p>
      <div className="buttons">
        <button className="primary">
          Message
        </button>
        <button className="primary ghost">
          Following
        </button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
    

    {/*toggle button */}
    <div> <br></br>  </div>
    <div onClick={this.handleClick} className="wrapper">
      
      <input type="checkbox" name="checkbox" className="switch" />
    </div>
    <div> <br></br> <br></br> </div>
    {/*toggle button */}

    <div style={{display:this.state.display()}}>
      <p>{this.state.duration} seconds have elapsed since mounting </p>
    </div>
  </div>
 

 
</>

  )}
  }
export default App;
