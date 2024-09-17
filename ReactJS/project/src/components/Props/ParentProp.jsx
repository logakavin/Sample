import React from 'react'
import ChildProp from './ChildProp';

export default function ParentProp() {
    const data = ["Asus","Acer","HP","DELL","Lenovo","MSI","Apple"];
  return (
    <div>
        <h1>Parent Prop File..!</h1>
        <ol>
            {(
                data.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                }))
            }
        </ol>
        <ChildProp lap={data} />
    </div>
  )
}
