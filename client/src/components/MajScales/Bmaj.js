import React from 'react'
import {useNavigate} from "react-router-dom";

import {
    playF3,
    playGb3,
    playG3,
    playAb3,
    playA3, 
    playBb3,
    playB3,
    playC4,
    playDb4,
    playD4,
    playEb4,
    playE4,
    playF4,
    playGb4,
    playG4,
    playAb4,
    playA4,
    playBb4,
    playB4,
    playC5,
    playDb5,
    playD5,
    playEb5,
    playE5,
    playF5,
    playGb5
  } from "../Tones.js";

  function Bmaj({ telePiano, handleRestart, notePlayed, setNotePlayed, scale, setScale, allScales, pianoType, setPianoType}) {

    let navigate = useNavigate();

    function playBmajNote(event) {
        
      
        if (event.keyCode === 65 && scale.length <= 7) {
          playB3();
          setNotePlayed(65)
          setScale([...scale, 65])
        }
        if (event.keyCode === 83 && scale.length <= 7) {
          playC4();
          setNotePlayed(83)
          setScale([...scale, 83])
        }
        if (event.keyCode === 69 && scale.length <= 7) {
          playDb4();
          setNotePlayed(69)
          setScale([...scale, 69])
        }
        if (event.keyCode === 68 && scale.length <= 7) {
          playD4();
          setNotePlayed(68)
          setScale([...scale, 68])
        }
        if (event.keyCode === 82 && scale.length <= 7) {
          playEb4();
          setNotePlayed(82)
          setScale([...scale, 82])
        }
        if (event.keyCode === 70 && scale.length <= 7) {
          playE4();
          setNotePlayed(70)
          setScale([...scale, 70])
        }
        if (event.keyCode === 71 && scale.length <= 7) {
          playF4();
          setNotePlayed(71)
          setScale([...scale, 71])
        }
        if (event.keyCode === 89 && scale.length <= 7) {
          playGb4();
          setNotePlayed(89)
          setScale([...scale, 89])
        }
        if (event.keyCode === 72 && scale.length <= 7) {
          playG4();
          setNotePlayed(72) 
          setScale([...scale, 72])
        }
        if (event.keyCode === 85 && scale.length <= 7) {
          playAb4();
          setNotePlayed(85)
          setScale([...scale, 85])
        }
        if (event.keyCode === 74 && scale.length <= 7) {
          playA4();
          setNotePlayed(74)
          setScale([...scale, 74])
        }
        if (event.keyCode === 73 && scale.length <= 7) {       
            playBb4();
            setNotePlayed(73)
            setScale([...scale, 73])
          }
        if (event.keyCode === 75 && scale.length <= 7) {
            playB4();
            setNotePlayed(75)
            setScale([...scale, 75])
        }
      }
      let arrNotesBmaj =  allScales && allScales[6] ? allScales[6]["notes"].split(', ').map((note)=>  parseInt(note)) : null

      function compareBmajScales(arrNotesBmaj, scale){
        if (scale.length === 8){ 
          return arrNotesBmaj.every((note, index) => {
              return note === scale[index]
          })
        }
    }
console.log(arrNotesBmaj)
console.log(scale)

function handleNewGame(){
   setPianoType(-1)
}

// !!!!!!!!!!! Change pianotype to 5 when create the G major scale
    return (
        <div>
            {compareBmajScales(arrNotesBmaj, scale) && pianoType === 6  ? <><h2>You know your major scales! Congrats!</h2><button className="new_scale_button" onClick={handleNewGame}>Take it from the top!</button></> : pianoType === 6 ? <h3>Play all 8 correct notes in the B major scale!</h3>: null}
        {scale.length === 8 & !compareBmajScales(arrNotesBmaj, scale) && pianoType === 6  ? <><h3>Good Try! Don't Worry!</h3><button className="new_scale_button" onClick={handleRestart}>Try Again</button></>: null}

            {pianoType === 6 ?  <div className="piano" onKeyDown={playBmajNote} tabIndex={1}>
            <div><button className="start_piano">CLICK TO<br />POWER ON<br /> PIANO</button> </div>
        {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
        {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>}
        {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
        {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>}
        {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
        {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>}
        {notePlayed === 65 ?<div className="red-white-key" onKeyDown={playB3}>A</div> : telePiano ? <div className="white-key-tele" onKeyDown={playB4}>A</div> : <div className="white-key" onKeyDown={playB4}>A</div>  }
        {notePlayed === 83 ? <div  className="red-white-key" onKeyDown={playC4}>S</div> : telePiano ? <div  className="white-key-tele" onKeyDown={playC4}>S</div> : <div  className="white-key" onKeyDown={playC4}>S</div> } 
        {notePlayed === 69 ? <div className="red-black-key" onKeyDown={playDb4}>E</div> : telePiano ? <div className="black-key-tele" onKeyDown={playDb4}>E</div> : <div className="black-key" onKeyDown={playDb4}>E</div>  }
        {notePlayed === 68 ? <div className="red-white-key" onKeyDown={playD4}>D</div> : telePiano ? <div className="white-key-tele" onKeyDown={playD4}>D</div> : <div className="white-key" onKeyDown={playD4}>D</div> }
        {notePlayed === 82 ? <div className="red-black-key" onKeyDown={playEb4}>R</div> : telePiano ? <div className="black-key-tele" onKeyDown={playEb4}>R</div> : <div className="black-key" onKeyDown={playEb4}>R</div> }
        {notePlayed === 70 ? <div className="red-white-key" onKeyDown={playE4}>F</div> : telePiano ?  <div className="white-key-tele" onKeyDown={playE4}>F</div> : <div className="white-key" onKeyDown={playE4}>F</div> }
        {notePlayed === 71 ? <div className="red-white-key" onKeyDown={playF4}>G</div> : telePiano ? <div className="white-key-tele" onKeyDown={playF4}>G</div> : <div className="white-key" onKeyDown={playF4}>G</div>  }
        {notePlayed === 89 ? <div className="red-black-key" onKeyDown={playGb4}>Y</div> : telePiano ? <div className="black-key-tele" onKeyDown={playGb4}>Y</div> : <div className="black-key" onKeyDown={playGb4}>Y</div>}
        {notePlayed === 72 ? <div className="red-white-key" onKeyDown={playG4}>H</div> : telePiano ? <div className="white-key-tele" onKeyDown={playA4}>H</div> : <div className="white-key" onKeyDown={playA4}>H</div>  }
        {notePlayed === 85 ? <div className="red-black-key" onKeyDown={playAb4}>U</div> : telePiano ? <div className="black-key-tele" onKeyDown={playAb4}>U</div> : <div className="black-key" onKeyDown={playAb4}>U</div>  }
        {notePlayed === 74 ? <div className="red-white-key" onKeyDown={playA4}>J</div> : telePiano ? <div className="white-key-tele" onKeyDown={playA4}>J</div> : <div className="white-key" onKeyDown={playA4}>J</div>  }
        {notePlayed === 73 ? <div className="red-black-key" onKeyDown={playAb4}>I</div> : telePiano ? <div className="black-key-tele" onKeyDown={playAb4}>I</div> : <div className="black-key" onKeyDown={playAb4}>I</div> }
        {notePlayed === 75 ? <div className="red-white-key" onKeyDown={playA4}>K</div> : telePiano ? <div className="white-key-tele" onKeyDown={playA4}>K</div> : <div className="white-key" onKeyDown={playA4}>K</div>  }
        {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>} 
        
        </div> : null}
        
        </div>
    )
}

export default Bmaj 
