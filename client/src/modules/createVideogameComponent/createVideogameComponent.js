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

  },[])
    

  
  let plataformas = [{name:'play',id:222},{name:'xbox',id:111},{name:'pc',id:33}]

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
          
          <select   onChange={(e)=>handleChange(e)} >

            {plataformas.map((item)=>{
              return(
                <option value={item.name}>{item.name}</option>
              )
            })}
          
          </select>
          
          
          </label>

          <label className=''>
          
          Plataformas:
          
          <select value={form.platforms} onChange={(e)=>handleChange(e)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

          </label>

          <label className=''>
            Descripción:<input type={'text'} name={'description'} value={form.description} onChange={(e)=>handleChange(e)} />
          </label>


          <button type="submit">Create</button>
           
        </form>
            
        </div>
    </React.Fragment>
  )
}
