'use client';

export default function LetterPage() {
  const textMessage = `My dear Friend, Nikita Diasti. 
        
Hearing you say all of that means more to me than I could ever put into words. I want you to know that you never, ever have to apologize for taking time for yourself, for being quiet, or for not knowing what to say. You don't have to carry the weight of the world on your shoulders, and you certainly don't have to carry it alone. 

we’re trying to get better life in here, to figured out. It’s built on absolute honesty, safe silence, and an unspoken promise that no matter how bad or messy things get, i hope we can always stay like this. You never have to hide the other parts of yourself when you  with me cause you are whole and worthy just as you are.

I am so deeply, overwhelmingly grateful for your presence in my life, and I am endlessly proud of you. I see how gracefully you handle things even when you feel like you're falling apart, and how deeply you care despite everything you carry. Thank you for trusting me with your heart, for letting me be a small spot of light in your world, and for simply being you. You matter so much to me, and as long as I'm around, i’m sure you will never have to face the shit alone. 
 
So please, take all the time you need. You're doing so much better than you give yourself credit for, I'll be right here listening whenever you need to vent, or just sitting with you in silence when words are too much. Take good care of yourself, because you deserve all the good things this world has to offer <3`;

  const quotes = [
    "I hope you remember you matter...",
    "Because you are my anchor when the tide gets too rough.",
    "Because you are my lighthouse when the night swallows the sea",
    "You are precious, and a beautiful eldest daughter...",
    "I'm always proud of whatever you've done in this world.",
    "i hope you find the love you truly deserved."
  ];

  let index = 0;
  let currentQuoteIndex = 0;
  const displayTime = 3000;
  const fadeTime = 1500;

  const handleStart = () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const paperLetter = document.getElementById('paperLetter');
    const textContainer = document.getElementById('textContent');
    const nextBtnWrapper = document.getElementById('nextBtnWrapper');
    const music = document.getElementById('bg-music') as HTMLAudioElement;

    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (paperLetter) paperLetter.style.display = 'block';

    if (music) {
      music.play().catch(err => {
        console.log("Audio play error:", err);
      });
    }

    function typeWriter() {
      if (textContainer && index < textMessage.length) {
        textContainer.innerHTML += textMessage.charAt(index);
        index++;
        paperLetter!.scrollTop = paperLetter!.scrollHeight;
        setTimeout(typeWriter, 30);
      } else if (textContainer) {
        textContainer.classList.remove('typing-cursor');
        if (nextBtnWrapper) nextBtnWrapper.style.display = 'block';
        paperLetter!.scrollTop = paperLetter!.scrollHeight;
      }
    }

    setTimeout(typeWriter, 300);
  };

  const handleNext = () => {
    const paperLetter = document.getElementById('paperLetter');
    const quotesScreen = document.getElementById('quotesScreen');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const finalHeart = document.getElementById('finalHeart');

    if (paperLetter) paperLetter.style.display = 'none';
    if (quotesScreen) quotesScreen.style.display = 'block';

    function showNextQuote() {
      if (currentQuoteIndex < quotes.length && quoteDisplay) {
        quoteDisplay.innerText = quotes[currentQuoteIndex];
        quoteDisplay.classList.remove('fade-out');
        quoteDisplay.classList.add('fade-in');

        setTimeout(() => {
          quoteDisplay.classList.remove('fade-in');
          quoteDisplay.classList.add('fade-out');

          setTimeout(() => {
            currentQuoteIndex++;
            showNextQuote();
          }, fadeTime);

        }, displayTime);
      } else {
        setTimeout(() => {
          if (quoteDisplay) quoteDisplay.style.display = 'none';
          if (finalHeart) finalHeart.style.display = 'block';
        }, 500);
      }
    }

    showNextQuote();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            padding: 15px;
            position: relative;
            overflow-x: hidden;
            background-color: #0c0c0c;
        }

        .bg-video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            z-index: -2;
            opacity: 0.6;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(3px);
            z-index: -1;
        }

        .welcome-container {
            text-align: center;
            color: white;
            z-index: 10;
            padding: 20px;
        }

        .welcome-title {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
            font-weight: 500;
            margin-bottom: 12px;
        }

        .btn-here {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 10px 28px;
            font-size: 1.1rem;
            font-weight: 500;
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(5px);
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn-here:hover {
            background: rgba(255, 255, 255, 0.35);
            transform: translateY(-2px);
        }

        /* Kotak Surat Compact untuk HP */
        .paper-letter {
            background-color: rgba(255, 253, 249, 0.94);
            background-image: linear-gradient(#e1dcd6 1px, transparent 1px);
            background-size: 100% 1.8rem;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
            max-width: 750px;
            width: 100%;
            max-height: 75vh;
            overflow-y: auto;
            position: relative;
            transform: rotate(-0.5deg);
            z-index: 10;
            display: none;
        }

        .paper-letter::-webkit-scrollbar {
            width: 4px;
        }
        .paper-letter::-webkit-scrollbar-thumb {
            background: #d81b60;
            border-radius: 10px;
        }

        .letter-content {
            font-family: 'Caveat', cursive;
            font-size: clamp(1.25rem, 4.5vw, 1.55rem);
            color: #2c2c2c;
            line-height: 1.8rem;
            white-space: pre-wrap;
        }

        .typing-cursor::after {
            content: '|';
            animation: blink 0.7s infinite;
            color: #d81b60;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .next-btn-wrapper {
            text-align: center;
            margin-top: 20px;
            padding-bottom: 5px;
            display: none;
            animation: fadeIn 0.8s ease forwards;
        }

        .btn-next-here {
            background: #d81b60;
            color: white;
            border: none;
            padding: 7px 22px;
            font-size: 0.9rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            border-radius: 25px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(216, 27, 96, 0.35);
            transition: all 0.3s ease;
        }

        .btn-next-here:hover {
            background: #c2185b;
            transform: translateY(-2px);
        }

        .quotes-screen {
            display: none;
            text-align: center;
            z-index: 10;
            max-width: 750px;
            width: 90%;
            position: absolute;
            padding: 0 15px;
        }

        .quote-text {
            font-family: 'Caveat', cursive;
            font-size: clamp(2rem, 7vw, 3rem);
            line-height: 1.3;
            color: #ffeb3b; 
            text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
            opacity: 0;
            transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
            transform: translateY(10px);
        }

        .quote-text.fade-in {
            opacity: 1;
            transform: translateY(0);
        }

        .quote-text.fade-out {
            opacity: 0;
            transform: translateY(-10px);
        }

        .final-heart {
            display: none;
            margin-top: 20px;
            font-size: 2.2rem;
            color: #ffeb3b;
            animation: fadeIn 1.5s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
      `}} />

      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      {/* 1. Halaman Welcome Awal */}
      <div className="welcome-container" id="welcomeScreen">
        <h1 className="welcome-title">A special message is waiting for you...</h1>
        <button className="btn-here" id="hereBtn" onClick={handleStart}>Click Here 💌</button>
      </div>

      {/* 2. Kotak Surat Persegi Panjang */}
      <div className="paper-letter" id="paperLetter">
        <div className="letter-content typing-cursor" id="textContent"></div>
        <div className="next-btn-wrapper" id="nextBtnWrapper">
          <button className="btn-next-here" id="nextHereBtn" onClick={handleNext}>next</button>
        </div>
      </div>

      {/* 3. Halaman Quotes Teks Kuning */}
      <div className="quotes-screen" id="quotesScreen">
        <h1 className="quote-text" id="quoteDisplay"></h1>
        <div className="final-heart" id="finalHeart">🤍</div>
      </div>

      {/* Musik Latar */}
      <audio id="bg-music" loop>
        <source src="/audio/music.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}