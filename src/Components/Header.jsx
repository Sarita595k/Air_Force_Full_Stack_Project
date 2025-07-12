import styled from 'styled-components'
import './HeaderStyles.css'

const HeaderDiv = styled.div`
width:100%;
height:100%;
`
const Video = styled.video`
width:100%;
height:85%;
object-fit:cover;
position:relative;
`
const HeaderHeading = styled.div`
position:absolute;
bottom:5rem;
color:white;
margin-left:3rem;
`

export const Header = () => {
    return (
        <HeaderDiv>
            <Video autoPlay muted loop src="/headerVideo.mp4" ></Video>
            <HeaderHeading className='headerHeading'>
                <h1>Indian Air force fight club</h1>
                <h2>can you compete the best-of-the-best?</h2>
                <button>Learn More <i style={{ marginLeft: ".7rem" }} class="fa-solid fa-arrow-right"></i></button>
            </HeaderHeading>
        </HeaderDiv >
    )
}