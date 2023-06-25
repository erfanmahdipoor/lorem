import { useState } from "react";
import data from './data'
function App() {
  const [count ,setCount]=useState(0)
  const [text,setText]=useSt ate([])
  const handleSubmit =(e)=>{
    e.preventDefault();
    let amount =parseInt(count)
    if(count<0){
      amount=1
    }if(count>4){
      amount=4
    }
    setText(data.slice(0,amount))
    // console.log(typeof amount);
  }
  return (
    <div className='section-center'>
      <h4>لورم ساز </h4>
       <form className="lorem" onSubmit={handleSubmit}>
        <label htmlFor="total">تعداد پارگراف</label>
        <input type="number" name="total" value={count} onChange={(e)=>{setCount(e.target.value)}} />
        <button type="submit">بساز</button>
       </form>
       <article className="lorem-text">
        {
          text.map((item)=>{
            return <p key={item.index}>{item}</p>
          })
        }
       </article>
    </div>
  );
}

export default App;
