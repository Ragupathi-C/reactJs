import { Congrates } from '../src/component/card/card';
import { SuperOver } from '../src/component/super over/superOver';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TechCard } from '../src/component/tech card/techCard';
import { Menu } from '../src/component/menu/menu';
import { Home } from '../src/component/hello world/home';
import { Counter } from '../src/component/counter/counter';
import { FruitCounter } from '../src/component/fruitsCounter/fruitsCounter';
import { Feedback } from './component/feedback/feedback';
import { ThankYouCard } from '../src/component/thankYouCard/thankYouCard';
import { SaasPractice } from './component/saasLayout1/sassLayout1';
import { SaasPractice2 } from './component/sassLayout2/sassLayout2';
import { Effect } from './component/useEffect/useEffect';




function App() {
  return (
    <div>
      <Effect />

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/home' element={<Home />} />
          <Route path='/congrats' element={<Congrates />} />
          <Route path='/superover' element={<SuperOver />} />
          <Route path='/techcard' element={<TechCard />} />
          <Route path='/Counter' element={<Counter />} />
          <Route path='/fruitcounter' element={<FruitCounter />} />
          <Route path='/feedback' element={<Feedback />}></Route>
          <Route path='/thankyou' element={<ThankYouCard />} />
          <Route path='/saasPractice' element={<SaasPractice />} />
          <Route path='/sassPractice2' element={<SaasPractice2 />} />
        </Routes>
      </BrowserRouter> */}


    </div >
  );
}

export default App;
