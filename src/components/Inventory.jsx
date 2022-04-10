import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  
  });
   
    // Create add and remove functions here that changes the
    const books= inv.books
  const notebooks=inv.notebooks
  const pens=inv.pens
  const inkpens=inv.inkpens
    // state.
    
const Change=(value,title)=>{
  if(title==="book"){
    if(books<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,books:prevState.books+value}
      })
    }
    
  }else if(title==="notebook")
  {
    if(notebooks<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,notebooks:prevState.notebooks+value}
      })
    }
    
  }else if(title==="pen")
  {
    if(pens<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,pens:prevState.pens+value}
      })
    }
    
   
  }else if(title==="inkpen")
  {
    if(inkpens<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,inkpens:prevState.inkpens+value}
      })
    }
   
  }
 
  
}
let total=books+notebooks+pens


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
          Change(1,"book")
        }}>+</button>
        <button className="circlularButton"  onClick={()=>{
        Change(-1,"book")
        }}>-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{
          Change(1,"notebook")
        }} >+</button>
        <button className="circlularButton"  onClick={()=>{
          Change(-1,"notebook")
        }}>-</button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{
          Change(1,"pen")
        }} >+</button>
        <button className="circlularButton" onClick={()=>{
          Change(-1,"pen")
        }} >-</button>
        <span>{pens}</span>
      </div>
     
            {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};