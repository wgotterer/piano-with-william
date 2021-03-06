import React from 'react'
import {
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
  

  function Fmin({telePiano, handleNewScale, handleRestart, notePlayed, setNotePlayed, scale, setScale, allScales, pianoType, setPianoType}) {
    function playFminNote(event) {
        if (event.keyCode === 65 && scale.length <= 7) {
          playF4();
          setNotePlayed(65)
          setScale([...scale, 65])
        }
        if (event.keyCode === 87 && scale.length <= 7) {
          playGb4();
          setNotePlayed(87)
          setScale([...scale, 87])
        }
        if (event.keyCode === 83 && scale.length <= 7) {
          playG4();
          setNotePlayed(83)
          setScale([...scale, 83])
        }
        if (event.keyCode === 69 && scale.length <= 7) {
          playAb4();
          setNotePlayed(69)
          setScale([...scale, 69])
        }
        if (event.keyCode === 68 && scale.length <= 7) {
          playA4();
          setNotePlayed(68)
          setScale([...scale, 68])
        }
        if (event.keyCode === 82 && scale.length <= 7) {
            playBb4();
            setNotePlayed(82)
            setScale([...scale, 82])
          }
        if (event.keyCode === 70 && scale.length <= 7) {
          playB4();
          setNotePlayed(70)
          setScale([...scale, 70])
        }
        if (event.keyCode === 72 && scale.length <= 7) {
          playC5();
          setNotePlayed(72)
          setScale([...scale, 72])
        }
        if (event.keyCode === 85 && scale.length <= 7) {
          playDb5();
          setNotePlayed(85)
          setScale([...scale, 85])
        }
        if (event.keyCode === 74 && scale.length <= 7) {
          playD5();
          setNotePlayed(74)
          setScale([...scale, 74])
        }
        if (event.keyCode === 73 && scale.length <= 7) {
          playEb5();
          setNotePlayed(73)
          setScale([...scale, 73])
        }
        if (event.keyCode === 75 && scale.length <= 7) {
          playE5();
          setNotePlayed(75)
          setScale([...scale, 75])
        }
        if (event.keyCode === 76 && scale.length <= 7) {
          playF5();
          setNotePlayed(76)
          setScale([...scale, 76])
        }
        
      }
      let arrNotesFmin =  allScales && allScales[10] ? allScales[10]["notes"].split(', ').map((note)=>  parseInt(note)) : null

      function compareFminScales(arrNotesFmin, scale){
        if (scale.length === 8){ 
          return arrNotesFmin.every((note, index) => {
              return note === scale[index]
          })
        }
    }


    return (
        <div>
          {compareFminScales(arrNotesFmin, scale) && pianoType === 3  ? <><h2>Good Job</h2><button className="new_scale_button" onClick={handleNewScale}>Click for a new Scale</button></> : pianoType === 3 ? <h3>Play all 8 correct notes in the F minor scale!</h3>: null}
    {scale.length === 8 & !compareFminScales(arrNotesFmin, scale) && pianoType === 3  ? <><h3>Good Try! Don't Worry!</h3><button className="new_scale_button" onClick={handleRestart}>Try Again</button></>: null}
             {pianoType === 3 ?  <div className="piano" onKeyDown={playFminNote} tabIndex={1}>
             <div className="start_container"><button className="start_piano">CLICK TO<br />POWER ON<br /> PIANO</button> </div>
    {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
    {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>}
    {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
    {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>} 
    {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
     {notePlayed === 65 ?<div className="red-white-key" onKeyDown={playF4}>A</div> : telePiano ? <div className="white-key-tele" onKeyDown={playF4}>A</div> : <div className="white-key" onKeyDown={playF4}>A</div> }
     {notePlayed === 87 ? <div className="red-black-key" onKeyDown={playGb4}>W</div> : telePiano ? <div className="black-key-tele" onKeyDown={playGb4}>W</div> : <div className="black-key" onKeyDown={playGb4}>W</div> }
     {notePlayed === 83 ? <div className="red-white-key" onKeyDown={playG4}>S</div> : telePiano ? <div className="white-key-tele" onKeyDown={playG4}>S</div> : <div className="white-key" onKeyDown={playG4}>S</div>  }
     {notePlayed === 69 ?<div className="red-black-key" onKeyDown={playAb4}>E</div> : telePiano ? <div className="black-key-tele" onKeyDown={playAb4}>E</div> : <div className="black-key" onKeyDown={playAb4}>E</div>}
     {notePlayed === 68 ?<div className="red-white-key" onKeyDown={playA4}>D</div> : telePiano ? <div className="white-key-tele" onKeyDown={playA4}>D</div> : <div className="white-key" onKeyDown={playA4}>D</div>  }
     {notePlayed === 82 ? <div className="red-black-key" onKeyDown={playBb4}>R</div> : telePiano ? <div className="black-key-tele" onKeyDown={playBb4}>R</div> : <div className="black-key" onKeyDown={playBb4}>R</div> }
     {notePlayed === 70 ?<div className="red-white-key" onKeyDown={playB4}>F</div> : telePiano ? <div className="white-key-tele" onKeyDown={playB4}>F</div> : <div className="white-key" onKeyDown={playB4}>F</div> }
    {notePlayed === 72 ?<div className="red-white-key" onKeyDown={playC5}>H</div> : telePiano ? <div className="white-key-tele" onKeyDown={playC5}>H</div> : <div className="white-key" onKeyDown={playC5}>H</div> }
    {notePlayed === 85 ? <div className="red-black-key" onKeyDown={playDb5}>U</div> : telePiano ? <div className="black-key-tele" onKeyDown={playDb5}>U</div> : <div className="black-key" onKeyDown={playDb5}>U</div> }
     {notePlayed === 74 ? <div className="red-white-key" onKeyDown={playD5}>J</div> : telePiano ? <div className="white-key-tele" onKeyDown={playD5}>J</div> : <div className="white-key" onKeyDown={playD5}>J</div> }
     {notePlayed === 73 ? <div className="red-black-key" onKeyDown={playDb5}>I</div> : telePiano ? <div className="black-key-tele" onKeyDown={playDb5}>I</div> : <div className="black-key" onKeyDown={playDb5}>I</div> }
     {notePlayed === 75 ? <div className="red-white-key" onKeyDown={playE5}>K</div> : telePiano ? <div className="white-key-tele" onKeyDown={playD5}>K</div> : <div className="white-key" onKeyDown={playD5}>K</div> }
     {notePlayed === 76 ? <div className="red-white-key" onKeyDown={playF5}>L</div> : telePiano ? <div className="white-key-tele" onKeyDown={playD5}>L</div> : <div className="white-key" onKeyDown={playD5}>L</div> }

    </div> : null}
        </div>
    )
}
export default Fmin
