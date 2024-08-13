import Navbar from "./components/Navbar.jsx";
import AnimatedCursor from "react-animated-cursor"
import {Header} from "@/components/Header.jsx";
import {About} from "@/components/About.jsx";
import {Pircing} from "@/components/Pircing.jsx";
import {Gallery} from "@/components/Gallery.jsx";

function App() {
  return (
    <>
        <AnimatedCursor
            innerSize={8}
            outerSize={10}
            color='255, 103, 14'
            outerAlpha={0.2}
            innerScale={1.5}
            outerScale={3}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}/>
        <Navbar/>
        <Header/>
        <Pircing/>
        <Gallery/>
        <About/>
    </>
  )
}

export default App
