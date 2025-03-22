import React from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";

function App() {
  const crosses = [
    {id: 1, model: "Adidas", size: "XXX"},
    {id: 2, model: "Nike", size: "YYY"},
    {id: 3, model: "Puma", size: "ZZZ"},
  ]
  return (
    <div className="App">

      {/*<SuperButton title={"super button"}*/}
      {/*             className={s.redForSuperButton}*/}
      {/*             onClick={() => {*/}
      {/*             }}*/}
      {/*>Red super button</SuperButton>*/}

      {/*<SuperButton title={"super button"}*/}
      {/*             className={s.blueForSuperButton}*/}
      {/*             onClick={() => {*/}
      {/*             }}*/}
      {/*>Blue super button</SuperButton>*/}

      {/*<SuperButton color={"red"}>Red super button</SuperButton>*/}
      {/*<SuperButton color={"secondary"}>Secondary super button</SuperButton>*/}
      {/*<SuperButton>Default super button</SuperButton>*/}
      {/*<SuperButton disabled={true}>Disabled super button</SuperButton>*/}

      {/*<SuperCrosses crosses={crosses}>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <SuperButton color={"red"}>Red super button</SuperButton>*/}
      {/*  <SuperButton color={"secondary"}>Secondary super button</SuperButton>*/}
      {/*  <SuperButton>Default super button</SuperButton>*/}
      {/*  <SuperButton disabled={true}>Disabled super button</SuperButton>*/}
      {/*</SuperCrosses>*/}

      {/*<SuperCrosses crosses={crosses}>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <SuperButton color={"red"}>Red super button</SuperButton>*/}
      {/*  <SuperButton color={"secondary"}>Secondary super button</SuperButton>*/}
      {/*</SuperCrosses>*/}

      {/*<SuperCrosses crosses={crosses}>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <input type={"text"}/>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <div>information</div>*/}
      {/*  <SuperButton color={"red"}>Red super button</SuperButton>*/}
      {/*</SuperCrosses>*/}

      {/*<Modal>*/}
      {/*  <input type="email" id="email" name="email" placeholder={"email"}/>*/}
      {/*  <input type="password" id="password" name="password" placeholder={"password"}/>*/}
      {/*  <button type="submit">Send</button>*/}
      {/*</Modal>*/}

      <Modal>
        <h4>Confident information</h4>
        <input type="email" id="email" name="email" placeholder={"email"}/>
        <input type="password" id="password" name="password" placeholder={"password"}/>
        <input type="password" id="password" name="password" placeholder={"password"}/>
        <label>
          <input type="checkbox" id="agree"/> I agree
        </label>
        <button type="submit">Send</button>
      </Modal>

    </div>
  );
}

export default App;
