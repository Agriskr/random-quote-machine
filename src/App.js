import './App.css';
import { useEffect, useState } from 'react';
import { CiTwitter } from 'react-icons/ci';


function App() {

  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => { return response.json() })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });

      });
  }

  return (
    <div className="App">
      <div className="quote-box" id="quote-box">
        <p className="quote-text" id="text">{quoteInfo.text}</p>
        <p className="quote-author" id="author">{quoteInfo.author}</p>
        <div className='buttons'>
          <button className="button" id="new-quote" onClick={getQuote}>
            New Quote</button>
          <a className="button" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text} id="tweet-quote"><CiTwitter /></a>
        </div>
      </div>
      <div className="footer">by AK</div>
    </div>
  );

}


export default App;
