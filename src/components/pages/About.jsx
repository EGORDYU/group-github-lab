
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

            </ul>
            <ul> 
                <li>Gloree</li>
                <li><img src={process.env.PUBLIC_URL + "/spiritcat.jpeg"} /></li>
                    <p>Cat and Pasta Lover</p>
            </ul>
        </>
    )
}