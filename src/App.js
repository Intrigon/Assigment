//cd Downloads\Test Program\Test React\hello-react
import React, {useState} from 'react';
import './App.css';


function App () {
  const [time, setTime] = useState({s:0, m:0, h:0})

  uph = () =>{
    this.setState({
      h: this.time.h + 1
    })
  }
  downh = () =>{
    this.setState({
      h: this.time.h - 1
    })
  }

  return(
    <section className="time-container">
      <section className="timer">
        <div>
          <h2>Countdown Timer</h2>
        </div>
        <div className="counter">
          <p>Hours</p>
          <button onClick={this.uph}>Up</button>
          <button onClick={this.downh}>Down</button>
          <p>Minutes</p>
          <button>Up</button>
          <button>Down</button>
          <p>Second</p>
          <button>Up</button>
          <button>Down</button>
        </div>
        <div className="timer-block">
          <section>
            <p>{(time.h >= 10)? time.h: "0" + time.h}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{(time.m >= 10)? time.m: "0" + time.m}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{(time.s >= 10)? time.s: "0" + time.s}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
        <div><button>Start</button></div>
      </section>
    </section>
  )
}


export default App;

