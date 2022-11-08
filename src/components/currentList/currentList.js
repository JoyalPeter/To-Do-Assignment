import { useState } from "react"
import styles from './currentList.module.css'
export default function CurrentList(props){

    const [flag,setFlag]=useState(false)
    const [itemName,setItemName]=useState('')
    const [edittedName,setEdittedName]=useState('')

    function deleteItem(name){
        props.setItems(arr=>arr.filter(elemt=>elemt!==name))
    }

    function editItem(name){
        setItemName(name)
        setFlag(!flag)
    }

    function applyEdit(){
        if(edittedName){
            props.setItems(arr=>
                            arr.map(e=>
                                {if(e===itemName) {
                                    return edittedName;} else {
                                        return e;}
                                }
                                )
                            )
            setFlag(!flag)
        }else{
            alert("Input Field Empty")
        }
    }

    return <>
        {flag && 
            <div>Enter Edited Name <input placeholder={itemName} onChange={(e)=>setEdittedName(e.target.value)}/>
            <button className={styles.bt} onClick={applyEdit}>Submit</button></div>
        }
        <h3>Current List</h3>
        {(props.items).map((item,index)=><div className={styles.dispDiv}>
                <span className={styles.dispLine}>{index+1})</span><span className={styles.dispLine}>{item}</span>
                <button className={styles.bt} onClick={()=>editItem(item)}>Edit</button>
                <button className={styles.bt} onClick={()=>{deleteItem(item)}} disabled={flag}>Delete</button>
            </div>)}
        
    </>
}