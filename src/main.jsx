/* eslint-disable react/no-deprecated */ 
import ReactDOM from 'react-dom/client'
import './index.css'

function navigation1() {
    return (
        
            <nav>
            <h1>Website</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        
    )
} 

const navigation2 = (
    <nav>
        <img src='/public/react_image.png' width={"40px"}></img>
        <h1>Fun Fact about react</h1>
        <ul>
            <li>was first released in 2013</li>
            <li>was created by Jordan Walke</li>
            <li>was well over 100k stars on github</li>
            <li>is maintained by facebook</li>
            <li>powers thousands of enterprise app, including mobile apps</li>
        </ul>
    </nav>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<navigation1())

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
