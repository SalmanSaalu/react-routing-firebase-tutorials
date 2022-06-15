import './App.css';
import React from 'react';
import { Firebase } from './firebase/config';
import {getFirestore,collection,getDocs,addDoc,deleteDoc, doc, setDoc } from 'firebase/firestore/lite'

function readdata(){
  const w=getFirestore(Firebase)
  const u=collection(w,'products')
  getDocs(u).then(doc=>doc.docs.forEach(r=>console.log(r.data(),r.id)))
}


function adds(){
  const w=getFirestore(Firebase)
  const u=collection(w,'products')
  addDoc(u,{
    name:'MI',
    price:1200
  })
  //u can also use setDoc instead of set doc
  
}


function del(){
  const w=getFirestore(Firebase)
  const u=collection(w,'products')
  deleteDoc(doc(u,'Rc9BIx9Su0rBMhyNU'))
  // const u=collection(w,'products').doc('')
  // // const s=getDocs(u)
  // deleteDoc(u)
//   deleteDoc(u,'Jr8PYRgeBT7nMxVRpwJr')
}

function upd(){
  const w=getFirestore(Firebase)
  const u=collection(w,'products')
  setDoc(doc(u,'Rc9BIx9Su0rBMhyNUk8C'),{
    name:"updated"
  })
}
function App() {
  return (
    <div className="App">
    <button onClick={readdata}>click me</button>
    <button onClick={adds}>add</button>
    <button onClick={del}>delete</button>
   < button onClick={upd}>update</button>
    </div>
  );
}

export default App;




