import { useState } from 'react'

function App() {
const [color,setColor] = useState('olive')
  return (
     
     
<div className='number1'
 style={{backgroundColor: color, 
}}
>

<div className='number2'>
<div className='number3'>

<button onClick={()=>setColor('red')} 
className='number4'
style={{backgroundColor:'red'}}
>Red</button>

<button onClick={()=>setColor('orange')}
className='number4'
style={{backgroundColor:'orange'}}
>orange</button>

<button onClick={()=>setColor('yellow')}
className='number4'
style={{backgroundColor:'yellow'}}
>Yellow</button>

<button onClick={()=>setColor('green')}
className='number4'
style={{backgroundColor:'green'}}
>Green</button>

<button onClick={()=>setColor('blue')}
className='number4'
style={{backgroundColor:'blue'}}
>Blue</button>

<button onClick={()=>setColor('indigo')}
className='number4'
style={{backgroundColor:'indigo'}}
>Indigo</button>

<button onClick={()=>setColor('violet')}
className='number4'
style={{backgroundColor:'violet '}}
>Violet </button>

<button onClick={()=>setColor('#5BCEFA')}
className='number4'
style={{backgroundColor:'#5BCEFA'}}
>Cute</button>

<button onClick={()=>setColor('black')}
className='number4'
style={{backgroundColor:'black',color:'white'}}
>Black</button>

<button onClick={()=>setColor('#FFFFFF')}
className='number4'
style={{backgroundColor:'#FFFFFF'}}
>White</button>

</div>
</div>
</div>

  )
}

export default App
