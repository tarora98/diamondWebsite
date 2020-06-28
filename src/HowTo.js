import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import home from './home/home';
import React from "react";
function HowTo(props) {
    return (
        <Carousel useKeyboardArrows={true} showArrows={true} showThumbs={false} showStatus={false} swipeScrollTolerance={0} >
            {
                props.structure.map((Lst) => {
                    return home(Lst)
                })
            }
        </Carousel>
    );
}

export default HowTo;