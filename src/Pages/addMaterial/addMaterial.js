import React from "react"
import AddMaterialForm from "../../Components/AddMaterialForm/AddMaterialForm"
import styles from "./style.module.scss";

const AddMaterial = () => {
    return (
    <div className={styles.pageContainer}>
        <AddMaterialForm/>
    </div>
    );
}

export default AddMaterial;