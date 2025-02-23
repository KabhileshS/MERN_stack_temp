import { memo , useState } from 'react'

const NumberFile = () => {

    var[number,setNum]=useState(0);

  return (
    <div>
      <h1>This is number box</h1>
      <input type="number" value={number} onChange={(e)=>setNum(e.target.value)} />
    </div>
  )
}

export default memo(NumberFile)
