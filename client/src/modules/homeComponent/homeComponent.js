import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'
import ButtonLpComponent from '../../shared/components/buttons/buttonLpComponent/buttonLpComponent'

import CardComponent from '../../shared/components/cardComponent/cardComponent'
import CoverNotfoundComponent from '../../shared/components/coverNotfoundComponent/coverNotfoundComponent'
import InputSearchComponent from '../../shared/components/inputs/inputSearchComponent/inputSearchComponent'
import PaginationComponent from '../../shared/components/paginationComponent/paginationComponent'
import SpinnerComponent from '../../shared/components/spinnerComponent/spinnerComponent'

import searchIcon from '../../shared/images/icons/searchIcon.svg'

import './homeComponent.css'

export default function HomeComponent() {

  const disp = useDispatch()
  let [spinner,setSpinner] = useState(true) //state del spinner
  let [search,setSearch] = useState() //state para el input 
  let numberPerpage = 15

  let [page,setpage] = useState(1)
  
  

   let getVideogames = useSelector((state) => state.videogames)

   let lastPage = parseInt(getVideogames.length / numberPerpage) 
   
  
   useEffect(()=>{
    (async () => {
      await disp(getAllVideogames());
      
      
      setSpinner(false);
   })();

   } ,[disp])


   let pagin = (n)=>{
     setpage(n)
   }
  
  // useEffect(()=>{
    
   
  //   disp(getAllVideogames())
  //   setvideogames(getVideogames)
  

  // },[disp,allVideogames])
  return (
    <React.Fragment>
      <ButtonLpComponent functo={pagin} textbutton={'click'}/>
      {spinner && <SpinnerComponent/>}
      <InputSearchComponent searchValue={search} setSearchValue={setSearch} placeHolder={'Skyrim...'}/>
        

      <div className='home-container'>
        
         {getVideogames.length==0 && <CoverNotfoundComponent />}



        {getVideogames &&  <PaginationComponent numberGames={getVideogames.length} numberPerPage={numberPerpage} pageFunction={pagin}/>}
       
        </div>
        <div className='container'>  

        { getVideogames && getVideogames.slice(

          ((page - 1) * numberPerpage),
          ((page - 1)  * numberPerpage) + numberPerpage

        ).map( (videogame) => {

          return(
            <div className='home-card-block'>
            <CardComponent id={videogame.id} name={videogame.name} image={videogame.image}  genres={videogame.genres} />

            </div>
          );

        })}
        </div>
      
      
     
      
    </React.Fragment>
  )
}
