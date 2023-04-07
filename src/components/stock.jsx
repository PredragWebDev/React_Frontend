import "./stock.css";
import "./navigation.css";

export const Stock = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='overlay'>
            <div className=''>
              <h1 className="stock-txt">
                Stock Market Simulator
                <span></span>
              </h1>
              <p className="trusted-txt">Trusted by over three million educated investors</p>
              <p className="investopedia-txt">The Investopedia Stock Market Simulator is FREE to join and use</p>
              <a href="/signup" id="get_started_btn" className="getstared-btn">GET STARTED</a>{' '}
            </div>
          </div>
          
          <div className="com-img">
            <img src="./img/com-img.svg" alt="" width={"100%"}/>
          </div>
            
        </div>
      </div>
    </header>
  )
}
