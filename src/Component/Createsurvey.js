import React from 'react'
import {useState} from 'react'
import Typeselector from "./typeselector"
import Question from "./Question"
import Options from "./Options"
import { useHistory } from 'react-router'
const  Createsurvey =({setsquestions , squestion})=>{
const getrandom = ()=>{
    return Math.floor((Math.random() *1000)+1);
}
const history  = useHistory();
const defaultarray  = [ { uid : getrandom(),value:'' },{ uid : getrandom(),value:'' }];
const[qText , setQText] = useState("");
const[Qtype , setQType] = useState(0);
const[option , setoption] = useState(defaultarray);

const addoption = ()=>{
//alert("+ clicked");
 let newOption = {
     uid : getrandom(), 
     value:''
 }
 let updatedoptions = [...option];
 updatedoptions.push(newOption);
 setoption(updatedoptions);
} 


const deleteoption = ()=>{
        if(option.length === 2){
            alert("Error : A select type Question at least have 2 option")
        }
        else{
            let updated  = [...option];
            updated.pop();
            setoption(updated);
        }
        

}

const updatedOptionText = (id ,text)=>{
        let updatedoption = [...option];
        let changeindex = updatedoption.findIndex(x => x.uid===id )
        updatedoption[changeindex].value = text;
        setoption(updatedoption);
}


const updateSurveyQuestion = ()=>{
    let newSurveyquestion = [...squestion];
    let newQ = {qtext : qText,
                qtype : Qtype,
                options : option,    
                }
    newSurveyquestion.push(newQ);
    setsquestions(newSurveyquestion);
    setQType(0);
    setoption(defaultarray);
    setQText('');

}

const publishquestion = ()=>{
    updateSurveyQuestion();
    history.push("/publish");
}



    return (
        <>
      <Typeselector Qtype={Qtype} setQType ={setQType}/>
      {
          Qtype !==0?
          <>
            <Question onTextUpdate = {setQText}/>

            {option.map((opt,k) =>( <Options key={k}  addoption={addoption}  uid = {opt.uid} deleteoption={deleteoption} updatedOptionText={updatedOptionText} /> ))}
            <button className="btn btn-primary m-1" onClick={()=> updateSurveyQuestion()}>Add Question</button>
            <button className="btn btn-primary m-1" onClick={()=>publishquestion()} >Publish</button>
          </>
          :null
      }
     
      
      </>
    );
}

export default Createsurvey
