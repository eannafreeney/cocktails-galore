import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import SingleCocktail from '../pages/SingleCocktail'

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if(loading){
    return <Loading/>
  }

  if(cocktails.length < 1){
    return <h2 className="section-title">
      Nothing matched your search
    </h2>

  }

  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map((item)=>{
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
