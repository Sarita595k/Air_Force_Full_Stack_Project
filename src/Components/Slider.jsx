import { useEffect, useState } from "react"
import styled from "styled-components"

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const images = [
    "/Slider_Images/slider1.jpg",
    "/Slider_Images/slider2.jpg",
    "/Slider_Images/slider3.jpg",
    "/Slider_Images/slider4.jpg",
    "/Slider_Images/slider5.jpg",
    "/Slider_Images/slider6.jpg",
    "/Slider_Images/slider7.jpg"
]

const SliderDivTrack = styled.div`
// display:flex;
// flex-direction:row;
// width:7*40%;
// overflow-x:hidden;
`

const SliderDiv = styled.div`
width:100%;
height:35%;
display:flex;
align-items:center;
`
const SliderImage = styled.img`
width:35%;
height:100%;
`
export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const handleLeftIndex = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }
    const handleRightIndex = () => {
        if (currentIndex < images.length - 3)
            setCurrentIndex(prev => prev + 1)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            {
                if (isPaused === false)
                    setCurrentIndex(prev => {
                        if (prev < images.length - 3) {
                            return prev + 1
                        } else {
                            return 0
                        }
                    })
            }
        }, 2000)
        return () => clearInterval(interval)
    }, [currentIndex, isPaused])
    return (<>
        <SliderDivTrack>
            <SliderDiv onMouseEnter={() => { setIsPaused(true) }} onMouseLeave={() => setIsPaused(false)}>
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => {
                    return <SliderImage key={index} src={image} alt="slider1" />
                })}

            </SliderDiv >
        </SliderDivTrack>
        <button onClick={handleLeftIndex}><FaArrowAltCircleLeft /></button>
        <button onClick={handleRightIndex}><FaArrowAltCircleRight /> </button>
    </>
    )
}