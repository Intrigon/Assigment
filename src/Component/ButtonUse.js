import React from 'react';
import Button from '@material-ui/core/Button';


function ButtonUse(props){
    return(
        <div>
            {(props.status === 0)?
                <Button variant="contained" color="primary" onClick={props.start}>Start</Button> : ""
            }

            {(props.status === 1)?
            <div>
                <Button variant="contained" color="primary" className="btn btn-red" onClick={props.stop}>Stop</Button>
                <Button variant="contained" color="secondary" className="btn btn-yel" onClick={props.reset}>Reset</Button>
            </div> : ""
            }

            {(props.status === 2)?
            <div>
                <Button variant="contained" color="primary" className="btn btn-gre" onClick={props.resume}>Resume</Button>
                <Button variant="contained" color="secondary" className="btn btn-yel" onClick={props.reset}>Reset</Button>
            </div> : ""
            }

            {(props.status === 3)?
                <Button variant="contained" color="secondary" onClick={props.reset}>Reset</Button> : ""
            }
        </div>
    );
}

export default ButtonUse;