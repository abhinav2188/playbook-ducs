import React, {useEffect, useState, useContext} from 'react'
import { FormGroup, MenuItem, TextField, InputLabel,Button ,Paper} from "@mui/material";
import materialData from "../../Pages/MaterialMetaData"
import styles from "./styles.module.scss";
import {uploadMaterial} from "../../services/StudyMaterial";
import { UserContext } from '../../providers/UserProvider';

const AddMaterialForm = (props) => {

    const user = useContext(UserContext);

    useEffect(()=>{
        console.log("user context",user);
    },[])
    const [formData,setFormData] = useState({
        type : materialData.materialTypes[0],
        subject: materialData.subjects[0],
        course: materialData.courses[0],
        semester: materialData.semesters[0],
        yearOfStudy : new Date().getFullYear(),
        topicsCovered : "",
        file: null,
    });

    const resetForm = () => {
        setFormData({
            type : materialData.materialTypes[0],
            subject: materialData.subjects[0],
            course: materialData.courses[0],
            semester: materialData.semesters[0],
            yearOfStudy : new Date().getFullYear(),
            topicsCovered : "",
            file:null,  
        });
        setError("");
    }

    const [error,setError] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const handleFormChange = (e) => {
        if(e.target.name == "file"){
            setFormData((prevData) => ({
                ...prevData,
                file : e.target.files[0]
            }))
        }else
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }

    useEffect( () => {
        console.log("validating fields");
        console.log(formData);
        if(!formData.topicsCovered || !formData.file || !formData.yearOfStudy){
            setError("all fields are required*");            
        }
        else
        setError("");
    },[formData])


    const handleSubmit = async () => {
        console.log("handle form submit");
        if(error !== "") {
            console.log("validation errors");
            return ;
        }
        setIsLoading(true);
        try{
            const id = await uploadMaterial({...formData,contributorId:user.uid});
            console.log("document added, id: ", id);        
        }catch(error){
            console.log("error adding doc ",error.message);
        }
        setIsLoading(false);
        resetForm();
    }

  return (
    <Paper elevation={2} className={styles.container}>
    <FormGroup className={styles.uploadForm}>
        <div className={styles.div1}>
            <TextField label="Type" select size="small" name="type" onChange={handleFormChange} value={formData.type}>
                {materialData.materialTypes.map((option,idx) => 
                <MenuItem key={idx} value={option}>{option}</MenuItem>  
                )}
            </TextField>
            <TextField label="Subject" select size="small" name="subject" onChange={handleFormChange} value={formData.subject}>
                {materialData.subjects.map((option,idx) => 
                <MenuItem key={idx} value={option}>{option}</MenuItem>  
                )}
            </TextField>
        </div>
        <div className={styles.div2}>
            <TextField label="Course" select size="small" name="course" onChange={handleFormChange} value={formData.course}>
                {materialData.courses.map((option,idx) => 
                <MenuItem key={idx} value={option}>{option}</MenuItem>  
                )}
            </TextField>
            <TextField label="Semester" select size="small" name="semester" onChange={handleFormChange} value={formData.semester}>
                {materialData.semesters.map((option,idx) => 
                <MenuItem key={idx} value={option}>{option}</MenuItem>  
                )}
            </TextField>
            <TextField label="Year-of-study" size="small" name="yearOfStudy" onChange={handleFormChange} value={formData.yearOfStudy}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
            />
        </div>
        <TextField label="Topics Covered" multiline maxRows={4}   name="topicsCovered" onChange={handleFormChange} value={formData.topicsCovered}/>
        <InputLabel htmlFor="contained-button-file">
            <input accept="application/pdf" id="contained-button-file" type="file" hidden name="file" onChange={handleFormChange} />
            <Button variant="outlined" component="span" >
                Add File
            </Button>
            {formData.file &&
            <span>{ formData.file.name}</span>
            }
        </InputLabel>
    </FormGroup>
    {error &&   <span className={styles.error}>{error}</span>}
    <button className={styles.submitButton} disabled={error!==""} onClick={handleSubmit}>{isLoading?"saving..":"Upload"}</button>
    </Paper>
  );
}

export default AddMaterialForm;