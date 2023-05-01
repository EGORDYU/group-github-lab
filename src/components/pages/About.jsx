
export default function About() {
    return (
        <>
            <ul> 
                <li><strong>Egor</strong></li>
                <li><img src={process.env.PUBLIC_URL + "/owlavatar.png"} /></li>
                <li></li>
            </ul>
          
            <ul> 
                <li><strong>Garrett</strong></li>
                <li><img src={process.env.PUBLIC_URL + "/bearavatar.jpeg"} /></li>
                <li>Food & Hibernation Enjoyer</li>
            </ul>
            <ul> 
                <li><strong>Gloree</strong></li>
                <li><img src={process.env.PUBLIC_URL + "/spiritcat.png"} /></li>
                <li>Cat and Pasta Lover</li>

            </ul>
        </>
    )
}