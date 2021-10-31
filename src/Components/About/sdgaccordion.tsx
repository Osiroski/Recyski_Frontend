import Accordion from 'react-bootstrap/Accordion'
const Sdgaccordion = () => {
    return (
        <div className="bd-example my-5">
            <Accordion id="accordionExample">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >
                            <h4 id="goal1">SDG Goal #1</h4>
                    </Accordion.Header>
                    <Accordion.Collapse  eventKey="0">
                        <Accordion.Body>
                            <strong>This is the first item's accordion body.</strong> 
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                            You can modify any of this with custom CSS or overriding our default variables. 
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </Accordion.Body>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >
                        <h4 id='goal2'>SDG Goal #2</h4>
                    </Accordion.Header>
                    <Accordion.Collapse eventKey="1" >
                        <Accordion.Body>
                            <strong>This is the second item's accordion body.</strong> 
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                            You can modify any of this with custom CSS or overriding our default variables. 
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </Accordion.Body>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h4 id='goal3'>SDG Goal #3</h4>
                    </Accordion.Header>
                    <Accordion.Collapse eventKey="2">
                        <Accordion.Body >
                            <strong>This is the third item's accordion body.</strong> 
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                            You can modify any of this with custom CSS or overriding our default variables. 
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </Accordion.Body>
                    </Accordion.Collapse>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Sdgaccordion
