import { Button } from 'antd'
import React from 'react'

const SubmitProperty = ({propertyState,setPropertyState,setLoading,loading,valid=false}) => {
  return (
    <div>
      <Button className='w-100'  disabled={!valid} onClick={()=>console.log(propertyState)}>Add Property</Button>
    </div>
  )
}

export default SubmitProperty
