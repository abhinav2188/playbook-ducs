import { firebaseStorage,firestoreDB } from "./firebase";

function uploadFile(fileData){
    var fileRef = firebaseStorage.child("files/"+fileData.name);
    return new Promise((resolve,reject) => {
        fileRef.put(fileData).then((snapshot) => snapshot.ref.fullPath).then(
            filePath => resolve(filePath)
        ).catch(error => reject(error));
    });
}

async function uploadMaterial(formData){
    const fpath = await uploadFile(formData.file);
    console.log("uploaded file path ",fpath);
    const data = {
        contributorId: formData.contributorId,
        type: formData.type,
        subject: formData.subject,
        course: formData.course,
        semester: formData.semester,
        yearOfStudy : formData.yearOfStudy,
        topicsCovered : formData.topicsCovered,
        filePath : fpath          
    };
    return new Promise((resolve,reject) => {
        firestoreDB.collection("study-material").add(data)
        .then(docRef => resolve(docRef.id))
        .catch(error => reject("error adding document ",error));
    })
}



export {uploadFile,uploadMaterial};

