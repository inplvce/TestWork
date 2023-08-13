import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";


// function sum(a: number, b: number) {
//       alert(a + b)
// }
// sum(1, 2);
// sum(121, 232);


function App(props: any) {
  // полезное что-то
  console.log("App rendering")

  // обязана вернуть JSX
  return (
      <div>
        {/*<PageTittle title={'This is APP component'}/>*/}
        {/*<PageTittle title={'My friends'}/>*/}
        {/*Article 1*/}
        {/*<Rating value={3} />*/}

        <Accordion titleValue={'Menu'} collapsed={true} />
        {/*     3) а этот Users*/}
        <Accordion titleValue={'Users'} collapsed={false} />
        Article 2
        {/*<Rating value={0} />*/}
        {/*<Rating value={1} />*/}
        {/*<Rating value={2} />*/}
        {/*<Rating value={3} />*/}
        {/*<Rating value={4} />*/}
        {/*<Rating value={5} />*/}
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTittle(props: PageTitlePropsType) {
  debugger
  console.log("PageTittle rendering")
  return <div>{ props.title }</div>
}



export default App;

