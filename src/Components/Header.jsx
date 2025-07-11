import styled from 'styled-components'
const HeaderDiv = styled.div`
width:100%;
height:100%;
`
const Video = styled.video`
width:100%;
height:80%;
object-fit:cover;
`
export const Header = () => {
    return (
        <HeaderDiv>
            <Video autoPlay muted loop src="/headerVideo.mp4" ></Video>
        </HeaderDiv >
    )
}