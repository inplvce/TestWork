// 6)
type AccordionPropsType = {
    titleValue: string
}

// function Accordion() {
// console.log('Accordion rendering')
// return <div>
//     <AccordionTitle/>
//     <AccordionBody/>
// </div>
// }


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>

    function Accordion(props: AccordionPropsType) {
        console.log("Accordion rendering")
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
}

type AccordionTittlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTittlePropsType) {
    debugger
    console.log("AccordionTittle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
}

export default Accordion;