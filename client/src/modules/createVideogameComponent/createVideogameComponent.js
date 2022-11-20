import React, { useEffect, useState } from 'react'
import './createVideogameComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'


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
  
  let [genres,setGenres] = useState([])
  let [platforms,setPlatforms] = useState([])

  let allGenres = useSelector((state=>state.genres))
  let allPlatforms = useSelector((state=>state.platforms))


  let [form,setfrom] = useState({
    name:'', //listo
    description:'',//listo
    releasedDate:'',//listo
    rating:0, //listo
    genres:[],
    platforms:[]
  })


  useEffect(() => {
    disp(actions.getAllPlatforms())
    disp(actions.getAllGenres())

}, [])
  useEffect(()=>{
    setGenres([...allGenres])
    setPlatforms([...allPlatforms])

  },[])
    

  let handleChange=(e)=>{
    e.preventDefault()
    let newform = form
    newform[e.target.name] = e.target.value
    setfrom((prev)=>({...prev,[e.target.name]:e.target.value})) 
}


  let handleSubmit=(e)=>{
    e.preventDefault()  
    console.log(form)
    
    // disp(actions.createVideogame(form))
    
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
            Lanzamiento:<input type={'date'} name={'releasedDate'} value={form.releasedDate} onChange={(e)=>handleChange(e)} />
          </label>
        
          <label className=''>
          
          Generos:
          
          <select   onChange={(e)=>handleChange(e)} multiple={true} 
          >
          {genres.map((item)=>{
            return(
              <option value={item.name}>{item.name}</option>
            )
          })}
        
          
          </select>
          
          
          </label>

          <label className=''>
          
          plataformas:
          
          <select onChange={(e)=>handleChange(e)} multiple={true} value={['pc','xbox']} >

            {platforms.map((item)=>{
              return(
                <option value={item.name}>{item.name}</option>
              )
            })}
          
          </select>

          </label>

          <label className=''>
            Descripción:<input type={'text'} name={'description'} value={form.description} onChange={(e)=>handleChange(e)} />
          </label>
          <textarea>
            Hello there, this is some text in a text area
          </textarea>

          <button type="submit">Create</button>
           
        </form>
            
        </div>
    </React.Fragment>
  )
}
