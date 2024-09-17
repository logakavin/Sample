import React from 'react'

export default function ChildProp(prop) {

    const laptop = prop.lap;
    
    console.log(laptop);

    return (
        <div>
            <h1>Child Prop File</h1>
            <ul>
                {
                    laptop.map((items, index) => {
                        return (
                            <li key={index}>{items}</li>
                        )
                    })
                }
            </ul>
            <SecondChildProp data={laptop} />
        </div>
    )
}

// Drilling Prop

function SecondChildProp({data}){
    return(
        <div>
            <h1>2nd Child Prop</h1>
            <ol>
                {
                    data.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
