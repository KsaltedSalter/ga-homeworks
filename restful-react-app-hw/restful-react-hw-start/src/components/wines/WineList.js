import React from 'react'
import { getAllWines } from '../../lib/api'
import WineCards from './WineCards'

const WineList = () => {
  const [state, setState] = React.useState({ wines: [] })

  const fetchWinesFromApi = async () => {
    try {
      const res = await getAllWines()
      setState({ wines: res.data })
    } catch (err) {
      console.log('An error with fetching wines', err)
    }
  }

  React.useEffect(() => {
    fetchWinesFromApi()
  }, [])

  return (
    <section className="sectionc">
      <div className="container">
        <div className="columns is-multiline">
          {state.wines.map((wine) => (
            <WineCards
              key={wine._id}
              _id={wine._id}
              name={wine.name}
              origin={wine.origin}
              image={wine.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WineList
