import { useState, useEffect } from 'react';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please?",
  " Kouny mo e?",
  " Dont' do this to me",
  "I'm begging you",
  " I'm gonna cry",
  "Valentine is so much better with you.",
  "You're breaking my heart...",
]



function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://connect.facebook.net/en_US/fbinstant.6.2.js";
    script.id = "fbinstant";
    document.body.appendChild(script);

    script.onload = () => {
      window.FBInstant.initializeAsync().then(function () {
        // load assets

        var progress = 0;

        var interval = setInterval(function () {
          progress += 5;
          window.FBInstant.setLoadingProgress(progress);

          if (progress >= 55) {
            clearInterval(interval);
            window.FBInstant.startGameAsync().then(function () {
              // Retrieving context and player information can only be done
              // once startGameAsync() resolves
              var contextId = window.FBInstant.context.getID();
              var contextType = window.FBInstant.context.getType();

              var playerName = window.FBInstant.player.getName();
              var playerPic = window.FBInstant.player.getPhoto();
              var playerId = window.FBInstant.player.getID();

              // Once startGameAsync() resolves it also means the loading view has
              // been removed and the user can see the game viewport
            }
            );
          };
        }, 100)
      });
    }
  }, []);

  function handleNoClick() {
    setNoCount(noCount + 1);
    //setYesPressed(false);
  }

  function handleYesClick() {
    setYesPressed(true);
   
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }


  return (
    <div className="valentine-containter">
      {yesPressed ? (
        <>
          <img
            alt="Bears kissing"

            src="	https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <h2>Yay!!!</h2>
        </>
      ) : (
        <>
          <img
            alt="Bear with hearts"
            className='centered-image'
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />

          <h1>Will you be my valentine?</h1>
          <div>

            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={handleYesClick}>
              Yes
            </button>

            <button
              className="no-button"
              onClick={handleNoClick}>
              {getNoButtonText()}
            </button>

          </div>
        </>

      )}

    </div>

  );
}

export default App;
