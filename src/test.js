import React from "react"
import ReactDOM from "react-dom";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",

    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
]

export default function Test() {
     
        return (
            <ResponsiveMasonry columnsCount={4} > 
            <Masonry columnsCount={4} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
        )
    
}