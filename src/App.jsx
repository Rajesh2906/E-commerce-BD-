import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const Home = lazy(()=> import("@pages/Home/Home"))
const SignIn = lazy(()=> import("./components/Molecules/SignIn"))
const SignUp = lazy(()=> import("./components/Molecules/SignUp"))

function App() {

  return (
    <Router history={history}>
      <Suspense fallback="Hello">
        <Routes>
          <Route exact  path="/E-commerce-BD-" element={<Home />} />
          <Route exact  path="/E-commerce-BD-/SignIn" element={<SignIn />} />
          <Route exact  path="/E-commerce-BD-/SignUp" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
