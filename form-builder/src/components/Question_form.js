import React, { useState, useEffect } from "react";
import "./Question_form.css";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CheckBoxIcon from '@mui/material/Checkbox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';   
import { BsFileText } from "react-icons/bs";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FcRightUp } from "react-icons/fc";
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import axios from 'axios';


function Question_form() {

    const [questions, setQuestions] = useState(
        [{questionText: "Which is the capital city of karnataka ? ",
        questionType:"radio",
        options : [
            {optionText: "Bengaluru"},
            {optionText: "Belgavi"},
            {optionText: "Hubli"},
            {optionText: "Mandya"}
        ],
        answer:false,
        answerKey:"",
        points:0,
        open: true,
        required:false}]
    )
    const [documentName,setDocName] = useState("untitled Document");
    const [documentDescription,setDocDesc] = useState("Add Description");
    const [id, setId] = useState(""); // Define id state


    function changeQuestion(text, i){
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion)
    }
    function changeOptionValue(text, i, j){
        var optionsQuestion = [...questions];
        optionsQuestion[i].options[j].optionText = text;
        setQuestions(optionsQuestion);
        console.log(optionsQuestion)
    }

    function addQuestionType(i,type){
        let qs = [...questions];
        console.log(type)
        qs[i].questionType = type;
        setQuestions(qs);
    }
    function removeOption(i, j){
        var RemoveOptionQuestion = [...questions];
        if ( RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1);
            setQuestions(RemoveOptionQuestion)
            console.log(i + "__" + j);
        }
    }

    function addOption(i){
        var optionOfQuestion = [...questions];
        if ( optionOfQuestion[i].options.length < 5) {
            optionOfQuestion[i].options.push({optionText: "Option " + (optionOfQuestion[i].options.length + 1)})
        }
        else{
            console.log("Max 5 options ");
        }
        setQuestions(optionOfQuestion)
    }

    function copyQuestion(i) {
        expandCloseAll();
        let qs = [...questions]
        var newQuestion = {...qs[i]};
        setQuestions([...questions, newQuestion])
    }

    function deleteQuestion(i){
        let qs = [...questions];
        if(questions.length > 1) {
            qs.splice(i,1);
        }
        setQuestions(qs)
    }
    function requiredQuestion(i){
        var reqQuestion = [...questions];
        reqQuestion[i].required = ! reqQuestion[i].required
        console.log( reqQuestion[i].required+" "+i);
        setQuestions(reqQuestion)
    }
    function addMoreQuestionField() {
        expandCloseAll();
        setQuestions([...questions,
            {questionText: "Question", questionType:"radio", options : [{optionText: "Option 1"}], open: true, required: false}]
            );
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        var itemgg = [...questions];
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        );
        setQuestions(itemF);
    }
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    function expandCloseAll(){
        let qs = [...questions];
        for (let j=0; j<qs.length; j++) {
            qs[j].open = false;
        }
        setQuestions(qs);
    }

    function handleExpand(i){
        let qs = [...questions];
        for (let j=0; j<qs.length; j++) {
            if (i == j){
                qs[i].open = true;
            }
            else {
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }

    function setOptionAnswer(ans,qno) {
        var Questions = [...questions];
        Questions[qno].answerKey = ans;
        setQuestions(Questions)
        console.log(qno+" "+ans)
    }

    function setOptionPoints(points,qno) {
        var Questions = [...questions];
        Questions[qno].points = points;
        setQuestions(Questions)
        console.log(qno+" "+points)
    }

    function doneAnswer(i){
        var answerOfQuestion = [...questions];
        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)
    }
    
    function addAnswer(i){
        var answerOfQuestion = [...questions];
        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)
    }

    // function CommitToDB() {
    //     axios.post(`http://localhost:9000/add_questions/${id}`,{
    //     "document_name": documentName,
    //     "doc_desc": documentDescription,
    //     "questions": questions,
    //     })
    //     .then(response => {
    //         // Handle successful response
    //         console.log('Response:', response.data);
    //         // Add any further processing here
    //     })
    //     .catch(error => {
    //         // Handle error
    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             console.log(error.request);
    //         } else {
    //             // Something else happened while setting up the request
    //             console.log('Error', error.message);
    //         }
    //         console.log(error.config);
    //     });
    // }

    function questionUI() {
        return questions.map((ques, i) =>(
            <Draggable key={i} draggableId={i + "id"} index={i}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div>
                            <div style={{marginBottom: "0px"}}>
                                <div style={{width: "100%", marginBottom: "0px" }}>
                                    <DragIndicatorIcon style={{transform: "rotate(-90deg)", color: "#DAE0E2",
                                            position:"relative", left:"300px"}} fontSize="small"/>
                                </div>
                                <div >
                                    <Accordion expanded={ques.open} onChange={()=>{handleExpand(i)}} className={ques.open ? "add border" : ""} key={i}>
                                        <AccordionSummary aria-controls="panelia-content" id="panelia-header" elevation={1} style={{ width: '100%' }}>
                                            {!ques.open ? (
                                            <div className="saved_questions">
                                                <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:'.1px', lineHeight:'24px',paddingBottom:"8px" }} >
                                                    {i + 1}.{ques.questionText}
                                                </Typography>

                                                {ques.options.map((op, j)=>(
                                    
                                                <div key={j} >
                                                    <div style={{display:'flex',}}>
                                                        <FormControlLabel style={{ marginLeft:"5px", marginBottom:"5px"}} disabled control={<input type={ques.questionType} 
                                                        color="primary" style={{ marginRight: '3px', }} required={ques.type} />}
                                                        label={
                                                        <Typography style={{
                                                            fontFamily: 'Roboto, Arial, sans-serif',
                                                            fontSize: '13px',
                                                            fontWeight: '400',
                                                            letterSpacing: '.2px',
                                                            lineHeight: '20px',
                                                            color: '#202124'}}>
                                                            {ques.options[j].optionText}
                                                        </Typography>
                                                        } />
                                                    </div>
                                                </div>
                                                ))}
                                            </div>
                                            ) : ""}
                                        </AccordionSummary>
                                        
                                            <div className="question_boxes">
                                            {questions[i].answer?(
                                                <AccordionDetails className="add_question" style={{marginLeft: "35px"}}>
                                                    <div className="add_question_top">
                                                        <input type="test" className="question" placeholder="Questions" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}} ></input>
                                                        <CropOriginalIcon style={{color:"#5f6368", marginRight: "10px"}} />
                                                        <Select className="Select" style={{color:'#5f6368',fontSize:"13px", width: "200px"}} >
                                                            <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}> <SubjectIcon style={{marginRight:"18px", marginLeft: "10px"}} /> Paragraph</MenuItem>
                                                            <MenuItem id="checkbox" value="checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}> <CheckBoxIcon style={{marginRight:"10px" ,color:"#70757a"}} checked /> CheckBoxes </MenuItem>
                                                            <MenuItem id="radio" value="radio" onClick={()=>{addQuestionType(i,"radio")}}> <Radio style={{marginRight:"10px",color:"#70757a"}} /> Multiple Choice </MenuItem>
                                                        </Select>
                                                    </div>
                                                    {ques.options.map((op, j)=>(
                                                        <div className="add_question_body" key={j}>
                                                            {
                                                                (ques.questionType!="text") ?
                                                                <input type={ques.questionType} style={{marginRight:"10px"}}/> :
                                                                <ShortTextIcon style={{marginRight:"10px"}} />
                                                            }
                                                            <div>
                                                                <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value, i, j)}}></input>
                                                            </div>
                                                            <CropOriginalIcon style={{color:"#5f6368"}}/>
                                                            <IconButton aria-label="delete" >
                                                                <CloseIcon onClick={()=>{removeOption(i,j)}} />
                                                            </IconButton>
                                                        </div>
                                                    ))}

                                                    {ques.options.length < 5 ? (
                                                        <div className="add_question_body">
                                                            <FormControlLabel disabled control={
                                                                (ques.questionType !== "text") ? 
                                                                <input type={ques.questionType} color="primary" inputProps={{ "aria-label": "secondary checkbox" }}
                                                                    style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> : 
                                                                <ShortTextIcon style={{ marginRight: "10px" }} />
                                                            } 
                                                            label={
                                                                <div>
                                                                    <input type="text" className="text_input" style={{ fontSize: "13px", width: "60px" }} placeholder="Add other"></input>
                                                                    <Button size="small" onClick={()=>{addOption(i)}} style={{ textTransform: "none",color: "#4285f4",fontSize: "13px",fontWeight: "600",}}>Add Option </Button>
                                                                </div>
                                                            }/>
                                                        </div>
                                                    ) : ""}

                                                    <div className="add_footer">
                                                        <div className="add_question_bottom_left">
                                                            <Button size="small" style={{textTransform: 'none',color:'#4285f4',fontSize:"13px",fontWeight:"600"}} onClick={()=>{addAnswer(i)}}>
                                                                <FcRightUp style={{border: "2px solid #4285f4", padding:"2px", marginRight:"8px"}} />Answer Key 
                                                            </Button>
                                                        </div>

                                                        <div className="add_question_bottom">
                                                            <IconButton aria-label="Copy" onClick={()=>{copyQuestion(i)}}>
                                                                <FilterNoneIcon/>
                                                            </IconButton>
                                                            <IconButton aria-label="Delete" onClick={()=>{deleteQuestion(i)}}>
                                                                <BsTrash/>
                                                            </IconButton>
                                                            <span style={{color:"#5f6368",fontSize:"13px"}}>Required</span>
                                                            <Switch name="CheckedA" color='primary' onClick={()=>{requiredQuestion(i)}} checked/>
                                                            <IconButton>
                                                                <MoreVertIcon/>
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </AccordionDetails>):(
                                                <AccordionDetails className="add_question">
                                                    <div className="top_header">
                                                        Choose Correct Answer
                                                    </div>
                                                    <div>
                                                        <div className="add_question_top">
                                                            <input type="text" className="question" placeholder="Question" value={ques.questionText} disabled/>
                                                            <input type="number" className="points" min="0" step="1" placeholder="0" onChange={(e)=>{setOptionPoints(e.target.value,i)}} />
                                                        </div>
                                                        {ques.options.map((op, j)=>(
                                                            <div className="add_question_body" key={j} style={{marginLeft:"8px",marginBottom:"10px",marginTop:"5px"}}>
                                                                <div key={j}>
                                                                    <div style={{display: 'flex'}} className="">
                                                                        <div className="form-check">
                                                                            <label style={{fontSize:"13px"}} onClick={()=>{setOptionAnswer(ques.options[j].optionText, i)}}>
                                                                            {(ques.questionType!="text") ?
                                                                                <input
                                                                                type={ques.questionType}
                                                                                name={ques.questionText}
                                                                                value="Option3"
                                                                                className="form-check-input"
                                                                                required={ques.required}
                                                                                style={{marginRight: "10px",marginBottom:"10px",marginTop:"5px"}}
                                                                                /> : <ShortTextIcon style={{marginRight: "10px"}} />}

                                                                            {ques.options.optionText}
                                                                            </label>    
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="add_question_body">
                                                            <Button size="Small" style={{textTransform: 'none', color:"#4285f4", fontSize:"13px", fontWeight:"600"}}>
                                                                <BsFileText style={{fontSize:"20px",marginRight:"8px"}}/>Add Answer Feedback
                                                            </Button>
                                                        </div>
                                                        <div className="add_question_bottom">
                                                            <Button variant="outlined" color="primary" style={{textTransform: 'none', color:"#4285f4", fontSize:"12px", fontWeight:"600"}} 
                                                                onClick={()=>{doneAnswer(i)}}>Done
                                                            </Button>
                                                        </div> 
                                                    </div>
                                                </AccordionDetails>)}
                                    
                                                {!ques.answer ? (
                                                <div className="question_edit">
                                                    <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />
                                                    I<OndemandVideoIcon className="edit" />
                                                    <CropOriginalIcon className="edit" />
                                                    <TextFieldsIcon className="edit" />
                                                </div>):""}    
                                        </div>
                                        
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        ))    
    }

    return (
        <div>
            <div className="question_form">
                <br></br>
                <div className="section">
                    <div className="question_tile_section">
                        <div className="question_form_top">
                            <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Untitled form" onChange={(e)=>{setDocName(e.target.value)}}></input>
                            <input type="text" className="question_form_top_desc" placeholder="Form Description" onChange={(e)=>{setDocDesc(e.target.value)}} ></input>
                        </div>
                    </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {questionUI()}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>         
                <div className="save_form">
                    <button variant="contained" className="save_button" color="primary" style={{fontSize:"14px"}}>
                        Save
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
  export default Question_form;