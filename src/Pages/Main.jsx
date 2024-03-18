import React,{useRef,useEffect} from 'react'
import AccordionComponent from '../../src/Accordion.jsx';
import {Data} from '../Resource/Resource.js'
import {slideInLeft} from 'react-animations';
// import Radium, {StyleRoot} from 'radium';
// import Radium from 'radium' 
import evangadiImg from '../Resource/eva_new.png'
import evangadiVideo from '../Resource/EVANGADI.mp4'
import './Main.css'
function Main() {
 
    const videoRef = useRef(null);

    useEffect(() => {
      // Programatically play the video on component mount
      videoRef.current.play().catch(error => {
        // Autoplay was prevented, handle the error (e.g., show a play button)
        console.error('Autoplay was prevented:', error);
      });
    }, []);
    // const styles = {
    //   bounce: {
    //     animation: 'x 1s',
    //     animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    //   }
    // }
  return (
    <div className='d-md-flex phaseAkafi'>
    <div className='akafi'>
    {
      Data?.map((single_data,i)=>{
        return <div key={i}>
        <h3 style={{margin:'10px',fontWeight:'bold'}}>{single_data.phase}</h3>
        <AccordionComponent    Title={single_data.Title}  ansDir={single_data.answerDir} quesDir={single_data.questionDir} />
        </div>
        
      })
    }
    </div>
    <div>
    {/* <Radium.StyleRoot> */}
    {/* <div  className="logoAkafi" style={styles.bounce}> */}
    <div  className="logoAkafi" >
    <video ref={videoRef} width={'100%'} height={'500px'}  autoPlay muted loop>
      <source src={evangadiVideo} type="video/mp4" />
    </video>
    <p className='note'>In each section, you'll discover two buttons: one for downloading the solutions and another for downloading the questions. The document obtained through the question download button is intended for distribution to the students. Meanwhile, the solution download button is designated for the instructors. Solutions may include PDF files or zipped folders containing codes and additional resources. These materials serve as aids for instructors, facilitating illustrative explanations or providing hints to students. </p>
    <div>
     
    </div>
    </div>
  {/* </Radium.StyleRoot> */}
    </div>
    
    </div>
  )
}

export default Main