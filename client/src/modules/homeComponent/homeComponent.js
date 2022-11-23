import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllGenres, getAllVideogames } from '../../redux/actions'
import ButtonLpComponent from '../../shared/components/buttons/buttonLpComponent/buttonLpComponent'

import CardComponent from '../../shared/components/cardComponent/cardComponent'
import CoverNotfoundComponent from '../../shared/components/coverNotfoundComponent/coverNotfoundComponent'
import InputSearchComponent from '../../shared/components/inputs/inputSearchComponent/inputSearchComponent'
import InputSelectComponent from '../../shared/components/inputs/inputSelectComponent/inputSelectComponent'
import PaginationComponent from '../../shared/components/paginationComponent/paginationComponent'
import SpinnerComponent from '../../shared/components/spinnerComponent/spinnerComponent'


import './homeComponent.css'

export default function HomeComponent() {
  const history = useHistory()
  const disp = useDispatch()

  let [videogames,setvideogames] = useState([])


  let [spinner,setSpinner] = useState(true) //state del spinner
  let [search,setSearch] = useState() //state para el input 
  let numberPerpage = 15 //numero de videojuegos por pagina


  

  let getVideogames = useSelector((state) => state.videogames) //busca el estado global de los videojuegos 
  let[videogameO,setvideogameO] = useState()
  
  let getGenres = useSelector((state) => state.genres) //busca el estado global de los generos 

  
   useEffect(()=>{
    (async () => {

      await disp(getAllVideogames());
      await disp(getAllGenres())
      
      setSpinner(false);
   })();

   } ,[disp,])


   useEffect(()=>{

    
    setvideogames(getVideogames.slice(0,15))
    setvideogameO(getVideogames)

   },[getVideogames])

   /**
    * funcionalidades para los componentes
    */


   let sortZA = ()=>{
    //obtengo el valor con genre.target.value ya es un input 
    setvideogames(
      videogameO.sort((a,b)=>{

        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        
        if(nameA > nameB){
          return -1
        }

        if(nameA < nameB){
          return 1
        }

          return 0
        
      }).slice(
        ((1 - 1) * numberPerpage),
      ((1 - 1)  * numberPerpage) + numberPerpage
      )
    )
 }

 let reset =async (e)=>{
  setSpinner(true);
  await disp(getAllVideogames())
  setSpinner(false);
 }

 /**
  * filtros de rating 
  */
 let sortRating05=()=>{

  setvideogames(
    videogameO.sort((a,b)=>{

      let nameA = a.rating
      let nameB = b.rating
      
      if(nameA < nameB){
        return -1
      }

      if(nameA > nameB){
        return 1
      }

        return 0
      
    }).slice(
      ((1 - 1) * numberPerpage),
    ((1 - 1)  * numberPerpage) + numberPerpage
    )
  )
 }

 let sortRating50=()=>{

  setvideogames(
    videogameO.sort((a,b)=>{

      let nameA = a.rating
      let nameB = b.rating
      
      if(nameA > nameB){
        return -1
      }

      if(nameA < nameB){
        return 1
      }

        return 0
      
    }).slice(
      ((1 - 1) * numberPerpage),
    ((1 - 1)  * numberPerpage) + numberPerpage
    )
  )
 }


   let sortAZ = ()=>{
      //obtengo el valor con genre.target.value ya es un input 
      setvideogames(
        videogameO.sort((a,b)=>{

          let nameA = a.name.toUpperCase()
          let nameB = b.name.toUpperCase()
          
          if(nameA < nameB){
            return -1
          }

          if(nameA > nameB){
            return 1
          }

            return 0
          
        }).slice(
          ((1 - 1) * numberPerpage),
        ((1 - 1)  * numberPerpage) + numberPerpage
        )
      )
   }

   let sortDBtrue=()=>{
    setvideogames(
      videogameO.filter((a)=>a.db===true).slice(
        ((1 - 1) * numberPerpage),
      ((1 - 1)  * numberPerpage) + numberPerpage
      )
    )
   }
   let sortDBfalse=()=>{
    setvideogames(
      videogameO.filter((a)=>a.db===false).slice(
        ((1 - 1) * numberPerpage),
      ((1 - 1)  * numberPerpage) + numberPerpage
      )
    )
   }


   let pagin = async(n)=>{
    setvideogames(
      videogameO.slice(
        ((n - 1) * numberPerpage),
        ((n - 1)  * numberPerpage) + numberPerpage
      )
    ) 
  }

    let selectGenreSort= async (genre)=>{
        genre.preventDefault()
      setSpinner(true)
      await disp(getAllVideogames())
      


      let newarray = videogameO.filter((item)=> item.genres.map((e)=>{
        return e.name
      })
      .includes(genre.target.value)
      
    )

       setvideogames( newarray.slice(
        ((0) * numberPerpage),
        ((0)  * numberPerpage) + numberPerpage
      ))
       setvideogameO(newarray)
      setSpinner(false)
      
    }

    let openDetail = (videogameId)=>{

      
      history.push(`home/detail/${videogameId}`)

    }
 

  return (
    <React.Fragment>
      
      <div className='home-filter-bg'>

      <div>
        <InputSearchComponent searchValue={search} setSearchValue={setSearch} placeHolder={'Skyrim...'}/>
      </div>
        <InputSelectComponent contentSelect={getGenres} selectFunction={selectGenreSort}  textDefault={'selecciona un genero'}/>
      
      <div className='home-filter-buttons'>
        <div>
          <ButtonLpComponent functo={sortZA} textbutton={'Z-A'} />
          <ButtonLpComponent functo={sortAZ} textbutton={'A-Z'} />
          <ButtonLpComponent functo={sortRating50} textbutton={'5-0'} />
          <ButtonLpComponent functo={sortRating05} textbutton={'0-5'} />

        </div>
        <div>
          <ButtonLpComponent functo={sortDBtrue} textbutton={'creados'} />
          <ButtonLpComponent functo={sortDBfalse} textbutton={'no creados'} />
          <ButtonLpComponent functo={reset} textbutton={'Reset'} />
        </div>
      </div>


      </div>
      
        

      <div className='home-container'>
      {spinner && <SpinnerComponent/>}
        {getVideogames.length===0 && <CoverNotfoundComponent />}



        {videogameO &&  <PaginationComponent numberGames={videogameO.length} numberPerPage={numberPerpage} pageFunction={pagin}/>}
       
        </div>
        <div className='container'>  

        { getVideogames && videogames.map( (videogame) => {

          return(
            <div className='home-card-block' onClick={()=>openDetail(videogame.id)}>
              <CardComponent key={videogame.id} id={videogame.id} name={videogame.name} image={videogame.image}  genres={videogame.genres} />
            </div>
          );

        })}
        </div>
      
      
     
      
    </React.Fragment>
  )
}
