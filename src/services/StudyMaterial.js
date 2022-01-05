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
    const subject = formData.subject;
    const type = formData.type;
    const data = {
        contributorId: formData.contributorId,
        course: formData.course,
        semester: formData.semester,
        yearOfStudy : formData.yearOfStudy,
        topicsCovered : formData.topicsCovered,
        filePath : fpath          
    };
    return new Promise((resolve,reject) => {
        const docRef = firestoreDB.collection("study-material").doc(type).collection(subject);
        docRef.add(data)
        .then(docRef => resolve(docRef.id))
        .catch(error => reject("error adding document ",error));
    })
}

async function getStudyMaterial(type,subject){
    return new Promise((resolve,reject) => {
        firestoreDB.collection("study-material").doc(type).collection(subject).get().then((querySnapshot) => {
            var material = [];
            querySnapshot.forEach((doc) => {
                material.push(doc.data());
            });
            resolve(material);
        }).catch(error => 
            reject("error fetching data")
        );
    })
}

async function getFileUrl(filePath){
    return new Promise((resolve,reject) => {
        // Create a reference to the file we want to download
        let fileRef = firebaseStorage.child(filePath);
        fileRef.getDownloadURL()
        .then((url) => {
            console.log("file url ",url);
            resolve(url);
        })
        .catch((error) => {
          switch (error.code) {
            case 'storage/object-not-found':
                reject("error : File doesn't exist");
                break;
            case 'storage/unauthorized':
              reject("error : User doesn't have permission to access the object");
              break;
            default:
              reject("Unknown error occurred");
          }        
        })
    });
 }


export {uploadFile,uploadMaterial, getStudyMaterial, getFileUrl};

