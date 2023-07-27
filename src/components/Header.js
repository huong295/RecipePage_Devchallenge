import React from 'react'
import photo1 from "../assets/photo1.png"
const styles = {
    header:"", 
    title : "font-playfair text-[48px] font-bold py-2 ", 
    contentTitle :"font-montserrat text-[var(--gray-2, #4F4F4F)] text-[14px] p-4 w-full md:w-3/4", 
    img:"rounded-md"
}
function Header() {
    return (
        <div className = {styles.header}>
            <div className = {styles.title}>
                <div className = {styles.title}>
                Classic Cheesecake Recipe
                </div>
            </div>
            <div className = {styles.contentTitle}>
            Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
            </div>
            <div className = {styles.img}>
                <img src ={photo1} alt =""></img>
            </div>
 
        </div>
    )
}

export default Header
