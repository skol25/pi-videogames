import React, { useEffect, useState } from 'react'
import './createVideogameComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import InputSelectComponent from '../../shared/components/inputs/inputSelectComponent/inputSelectComponent'
import ButtonLpComponent from '../../shared/components/buttons/buttonLpComponent/buttonLpComponent'


/**
 * 
 *  Nombre
*Descripción
*Fecha de lanzamiento
*Rating
*[ ] Posibilidad de seleccionar/agregar varios géneros
*[ ] Posibilidad de seleccionar/agregar varias plataformas
[ ] Botón/Opción para crear un nuevo videojuego
 */


export default function CreateVideogameComponent() {

  const disp = useDispatch()

  let allGenres = useSelector((state=>state.genres))
  let allPlatforms = useSelector((state=>state.platforms))


  let [form,setfrom] = useState({
    name:'', //listo
    description:'',//listo
    released:'',//listo
    rating:0, //listo
    genres:[],//listo
    platforms:[]//listo
  })

  useEffect(()=>{

    disp(actions.getAllGenres())
    disp(actions.getAllPlatforms())

  },[disp])
/**
 * funciones para select
 */

  let handleSelectGenre=(e)=>{
   let value = e.target.value
    
    setfrom(prev=>({
      ...prev,
      genres:form.genres.concat(value)
    }))
   
  }

  let deletegenre=(genre)=>{
    
    setfrom(prev=>({
      ...prev,
      genres:form.genres.filter((e)=> e !== genre)
    }))
  }
/**
 * 
 * manejar input select de plataformas 
 */
  let handleSelectPlatform=(e)=>{
    let value = e.target.value
     
     setfrom(prev=>({
       ...prev,
       platforms:form.platforms.concat(value)
     }))
    
   }
 
   let deletePlatform=(plat)=>{
     
     setfrom(prev=>({
       ...prev,
       platforms:form.platforms.filter((e)=> e !== plat)
     }))
   }



/**
 * 
 * funciones para inputs normales 
 */

  let handleChange=(e)=>{
    e.preventDefault()
    let newform = form
    newform[e.target.name] = e.target.value
    setfrom((prev)=>({...prev,[e.target.name]:e.target.value})) 
}
 

  let handleSubmit=(e)=>{
    e.preventDefault()  
    console.log(form)
    disp(actions.createVideogame(form))
  }

  return (
    <React.Fragment>

        <div className='form-container cardbg '>

        <form className='form-center' onSubmit={handleSubmit}>
        
          <label className=''>
            Nombre:<input type={'text'} name={'name'} value={form.name} onChange={(e)=>handleChange(e)} />
          </label>

          <label className=''>
            Rating:<input type={'number'} name={'rating'} value={form.rating} onChange={(e)=>handleChange(e)} />
          </label>

          <label className=''>
            Lanzamiento:<input type={'date'} name={'released'} value={form.released} onChange={(e)=>handleChange(e)} />
          </label>


          <label>
        Generos:<InputSelectComponent contentSelect={allGenres} selectFunction={handleSelectGenre} textDefault={'selecciona un genero'}/>
       
        {form.genres.map((item)=>{
          return (
            <div>
              <p>{item}</p>
              <button onClick={()=>deletegenre(item)} >X</button>
            </div>
          )
        })}
      </label>

      <label>
      Plataformas:<InputSelectComponent contentSelect={allPlatforms} selectFunction={handleSelectPlatform} textDefault={'selecciona sus plataformas'}/>
     
      {form.platforms.map((item)=>{
        return (
          <div>
            <p>{item}</p>
            <button onClick={()=>deletePlatform(item)} >X</button>
          </div>
        )
      })}
    </label>
        

          <label className=''>
            Descripción:
            </label>
            <textarea type={'text'} name={'description'} value={form.description} onChange={(e)=>handleChange(e)} className='form-textarea'>
                Hello there, this is some text in a text area
            </textarea>
          

            <ButtonLpComponent typeButton={'submit'} textbutton={'Crear'}/>
           
        </form>
        
        
        </div>
    </React.Fragment>
  )
}
