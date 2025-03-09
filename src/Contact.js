import React from 'react'
import MyForm from './GoogleForm.css'
const Data = () => {
  return (
    <div>
        <h1 className='he'> # CONTACT ME #</h1>
        <iframe  className={MyForm}
        src="https://docs.google.com/forms/d/e/1FAIpQLSf10DaXSorgPVnGTaYaPLhK0x1x0-qnN3KB3tvLIiWCRfdTNw/viewform?embedded=true"
         width="640" height="1295" frameborder="0" 
         marginheight="0" marginwidth="0" scrolling='no'>Loading…</iframe>
    </div>
  )
}

export default Data