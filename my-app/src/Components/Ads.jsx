import React, {useEffect, useState} from 'react'



const images = []

const Ads = () => {
    const [picture, setPicture] = useState(images[0]);
    const [pic, setPic] = useState(images[1]);

    let max = images.length-1
    

 
    useEffect(() => {
        setInterval(() => {
            let num = Math.floor(Math.random() * max)
            let num2 = Math.floor(Math.random() * max)
            setPicture(images[num])
            setPic(images[num2])
        }, 10000);
    }, []);


    return (
        <div className = {styles.main}>
            <img src= {picture} alt="break"/>
            <img src= {pic} alt="break"/>
        </div>
    )
}

export {Ads}
