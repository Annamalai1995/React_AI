import { Boot } from "./Bootstrap";
import { Flow, List, Orderlist } from "./fun";
import { Parameter } from "./ParameterComponent";
import Hello from "./ss";
import { Tables } from "./Tablecss";
import { UseStateCount } from "./UseStateCOunt";
import { UsestateHooks } from "./usestatevariable";

function App() {
  return (
    <>
    {/* <List/>
    <Flow/>
    <Orderlist/>
    <Hello/>
    <UsestateHooks/>
    <UseStateCount/> */}
    <Tables/>
    <Boot/>
    <Parameter where="./download.jpg"length="400px"breadth="400px"/>

    </>
  
   

  );
}

export default App;
