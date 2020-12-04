//cd Downloads\Test Program\Test React\hello-react
import React, {useState} from 'react';
import './App.css';
import { ArrowDropUp, ArrowDropDown, AccessAlarm } from '@material-ui/icons';
import ButtonUse from './Component/ButtonUse';


function App () {
  const [time, setTime] = useState({s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [alert, setAlert] = useState("");

  const up = (Y) =>{
    if(Y === "h" && time.h < 59)
    setTime({s: time.s,m: time.m,h: time.h + 1});
    else if(Y === "m" && time.m < 59)
    setTime({s: time.s,m: time.m + 1,h: time.h});
    else if(Y === "s" && time.s < 59)
    setTime({s: time.s + 1,m: time.m,h: time.h});
  };
  const down = (Y) =>{
    if(Y === "h" && time.h > 0)
    setTime({s: time.s,m: time.m,h: time.h - 1});
    else if(Y === "m" && time.m > 0)
    setTime({s: time.s,m: time.m - 1,h: time.h});
    else if(Y === "s" && time.s > 0)
    setTime({s: time.s - 1,m: time.m,h: time.h});
  };

  const start = () =>{
    setAlert("Time Remaining");
    run();
    setStatus(1);
    setInterv(setInterval(run,1000));
  }

  var updatedh=time.h, updatedm=time.m, updateds=time.s;

  const run = () =>{
    if(updateds>=0){
      updateds--;
    }
    if(updateds <= -1 && updatedm >= 0){
      updatedm--;
      updateds = 59;
    }
    if(updatedm <= -1 && updatedh > 0){
      updatedh--;
      updatedm = 59;
    }
    if(updatedm < 0){
      return finish();
    }
    
    console.log(updateds, updatedm, updatedh);
    return setTime({s:updateds, m:updatedm, h:updatedh});
  }

  const stop = () =>{
    clearInterval(interv);
    setStatus(2);
  }
  const reset = () =>{
    setAlert("");
    document.body.style = "background-color: cyan;";
    clearInterval(interv);
    setStatus(0);
    setTime({s:0, m:0, h:0});
  } 
  const resume = () => start(); 

  const finish = () =>{
    setAlert("BOOOM!!!!");
    setStatus(3);
    document.body.style = "background-color: #adff2f;";
    setTime({s:0, m:0, h:0});
    clearInterval(interv);
  } 


  return(
    <section className="time-container">
      <section className="timer">
        <div>
          <h2><AccessAlarm></AccessAlarm>Simple Countdown<AccessAlarm></AccessAlarm></h2>
          <h3>{alert}</h3>
        </div>

        <div className="timer-block">
          <section>
            <ArrowDropUp onClick={() => up("h")}></ArrowDropUp>
            <p>{(time.h >= 10)? time.h: "0" + time.h}</p>
            <p><small>Hours</small></p>
            <ArrowDropDown onClick={() => down("h")}></ArrowDropDown>
          </section>
          <span>
            <br/>
            <p>:</p>
          </span>
          <section>
            <ArrowDropUp onClick={() => up("m")}></ArrowDropUp>
            <p>{(time.m >= 10)? time.m: "0" + time.m}</p>
            <p><small>Minutes</small></p>
            <ArrowDropDown onClick={() => down("m")}></ArrowDropDown>
          </section>
          <span>
            <br/>
            <p>:</p>
          </span>
          <section>
            <ArrowDropUp onClick={() => up("s")}></ArrowDropUp>
            <p>{(time.s >= 10)? time.s: "0" + time.s}</p>
            <p><small>Seconds</small></p>
            <ArrowDropDown onClick={() => down("s")}></ArrowDropDown>
          </section>
        </div>
        <div>
          <ButtonUse status={status} stop={stop} resume={resume} reset={reset} start={start}/>
        </div>
      </section>
    </section>
  )
}


export default App;

