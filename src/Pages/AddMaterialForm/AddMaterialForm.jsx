import React, {useState} from 'react'

import { FormGroup, Input, MenuItem, TextField,Select, InputLabel,Button ,Paper} from "@mui/material";
import materialData from "../MaterialMetaData"
import styles from "./styles.module.scss";

const AddMaterialForm = (props) => {

    const [formData,setFormData] = useState({
        type : materialData.materialTypes[0],
        subject: materialData.subjects[0],
        course: materialData.courses[0],
        semester: materialData.semesters[0],
        yearOfStudy : null,
        topicsCovered : null,
        file: null,
    });

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

  return (
    <Paper elevation={2} className={styles.container}>

    <FormGroup className={styles.uploadForm}>
        <div className={styles.div1}>
      <TextField label="Type" select size="small" name="type" onChange={handleFormChange} value={formData.type}>
        {materialData.materialTypes.map(option => 
          <MenuItem value={option}>{option}</MenuItem>  
        )}
      </TextField>
      <TextField label="Subject" select size="small" name="subject" onChange={handleFormChange} value={formData.subject}>
        {materialData.subjects.map(option => 
          <MenuItem value={option}>{option}</MenuItem>  
        )}
      </TextField>
      </div>
      <div className={styles.div2}>
        <TextField label="Course" select size="small" name="course" onChange={handleFormChange} value={formData.course}>
            {materialData.courses.map(option => 
            <MenuItem value={option}>{option}</MenuItem>  
            )}
        </TextField>
        <TextField label="Semester" select size="small" name="semester" onChange={handleFormChange} value={formData.semester}>
            {materialData.semesters.map(option => 
            <MenuItem value={option}>{option}</MenuItem>  
            )}
        </TextField>
        <TextField label="Year-of-study" size="small"  name="yearOfStudy" onChange={handleFormChange} value={formData.yearOfStudy}/>
      </div>
      <TextField label="Topics Covered" multiline maxRows={4}   name="topicsCovered" onChange={handleFormChange} value={formData.topicsCovered}/>
        <InputLabel htmlFor="contained-button-file">
            <input accept="image/*" id="contained-button-file" type="file" hidden name="file" onChange={handleFormChange}/>
            <Button variant="outlined" component="span">
                Add File
            </Button>
            {formData.file &&
            <span>{ formData.file.name}</span>
            }
        </InputLabel>
    </FormGroup>
    <button className={styles.submitButton}>Upload</button>

    </Paper>
  );
}

export default AddMaterialForm;