import React from 'react'

/**
 * necesario de entender para usar 
 * @param {content} viene un array de objetos 
 * @param {selected} funcionque selecciona el item que se mostro 
 */

export default function InputSelectComponent({contentSelect,selectFunction,textDefault}) {


  return (
    <React.Fragment>
    <select onChange={selectFunction} >
        <option selected value={textDefault}>{textDefault}</option>
        {contentSelect && contentSelect.map((item)=>{
               return(
                   <option value={item.name}>{item.name}</option>

               )

        })}
    </select>
    
    </React.Fragment>
  )
}
