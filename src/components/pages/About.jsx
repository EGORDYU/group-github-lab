
export default function About() {
    return (
        <>
            <ul> 
                <li>Egor</li>
                <li><img src={process.env.PUBLIC_URL + "/owlavatar.png"} /></li>
            </ul>
          
            <ul> 
                <li>Garrett</li>
                <li><img src={process.env.PUBLIC_URL + "/bearavatar.jpeg"} /></li>
                <li>Food & Hibernation Enjoyer</li>
            </ul>
            <ul> 
                <li>Gloree</li>
                <li><img src={process.env.PUBLIC_URL + "/spiritcat.png"} /></li>
                    <p>Cat and Pasta Lover</p>
            </ul>
        </>
    )
}