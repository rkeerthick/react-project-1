/* eslint-disable react/no-deprecated */ 
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
