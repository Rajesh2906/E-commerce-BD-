import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const Home = lazy(()=> import("@pages/Home/Home"))

function App() {

  return (
    <Router history={history}>
      <Suspense fallback="Hello">
        <Routes>
          <Route exact  path="/E-commerce-BD-" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
