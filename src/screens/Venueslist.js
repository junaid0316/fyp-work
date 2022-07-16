import React from 'react'
import Searchbox from '../components/venuelist/Searchbox'
import Venuefilter from '../components/venuelist/Venuefilter'
import Venueshave from '../components/venuelist/Venueshave'

const Venueslist = () => {
    const style={
        padding: "20px 120px"
    }
  return (
    <div style={style}>
        <Searchbox/>
        <Venuefilter/>
        <Venueshave/>
    </div>
  )
}

export default Venueslist