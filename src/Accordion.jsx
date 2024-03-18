import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Display from './Components/DisplayComponent/Display';
import {Link} from 'react-router-dom'
import 'animate.css';
import './Accordion.css';
// import questions from './Bonous_Questions_new/phase one/Week 1 Basic computer skill/PDF/Question.pdf'
function AccordionComponent({Title,quesDir,ansDir}) {
  return (
    <div className='parentAkafi'>
      {/* <h3>{Phase}</h3> */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{Title}</Accordion.Header>
          <Accordion.Body>
      
            <div className='justify-content-around'>

              <Button className='m-2'  variant="info" >
<a href={quesDir} target="_blank" >Question Download</a>
              
                  </Button>
                  <Button className='m-2'  variant="warning" >
<a href={ansDir} target="_blank"> Solution Download</a>

              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
