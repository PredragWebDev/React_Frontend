import "./faqs.css";
import "./navigation.css";

export const Faqs = (props) => {
  return (
    <div className='faqs'>
	<div className='imgNfaqs'>
<img src="./img/faqs.svg" alt="" className="img"/>
FAQs
 </div>
 
 <div className='faq_n'>
 <div>
 	<span className="question">Can you play the stock market game by yourself?</span>
 </div>
 <div className="answer">Other Simulator users do not have any effect on your portfolio. So you are completely capable of trading and managing your portfolio on your own.</div>
 </div>
 
<div className='faq_n'>
 	<div>
 <span className="question">Does the stock market game cost money?</span>
 </div>
 <div className="answer">Not one bit. Sign up for free without entering any of your financial information. You will start with your own virtual cash to trade with.</div>
 </div>
 
 <div className='faq_n'>
 	<div>
 <span className="question">Can I trade options in the Investopedia Simulator?</span>
 </div>
 <div className="answer">Yes! You can trade call and put options but at this time the Simulator does not support writing options.</div>
 </div>

 <div className='faq_n'>
 	<div>
 <span className="question">Is there an Investopedia Simulator mobile app?</span>
 </div>
 <div className="answer">No, but the Simulator is completely mobile responsive and will work on your iOS or Android device in your preferred web browser.</div>
 </div>
 <div className="faq_n">
 <a href="" id="get_started_btn" className="getstared-btn">GET STARTED</a>
</div>
</div>
  )
}
