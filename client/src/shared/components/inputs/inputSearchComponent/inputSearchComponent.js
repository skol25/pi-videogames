import React from 'react'
import './inputSearchComponent.css'

export default function InputSearchComponent({searchValue,setSearchValue,placeHolder}) {

    let onChangeSetInput=(e)=>{

        setSearchValue(e.target.value)

    }

  return (
    <React.Fragment>
        <div className='inputsearch-block '>
        <div className='inputseacrh-bg'>   

            <input 
                className='inputseach-input'
                placeholder={placeHolder}
                onChange={onChangeSetInput}
                value={searchValue}
            />
            
            <span class="material-symbols-outlined icon-color">
                search
            </span>
           
        </div>
        </div>
    
    </React.Fragment>
  )
}
