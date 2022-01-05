import React, { useState } from "react";
import { Document, Page, pdfjs  } from "react-pdf";
import styles from "./pdf.module.scss";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { ButtonGroup, Button } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfRender = (props) => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const { pdf } = props;

  const [scale, setScale] = useState(1);

  return (
    <div className={styles.container}>
    <div className={styles.pdfControls}>
      <ButtonGroup size="small">
      <Button onClick={()=>setScale(s => (s-0.10)<=0.25?0.25:s-0.1)}><ZoomOutIcon/></Button>
      <Button>{Math.floor(scale*100)}%</Button>
      <Button onClick={()=>setScale(s => (s+0.10)>=2?2:s+0.1)}><ZoomInIcon/></Button>
      </ButtonGroup>
    </div>
    <div className={styles.pdfContainer}>
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={console.error}
      className={styles.document}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} className={styles.page} scale={scale}/>
      ))}
    </Document>

    </div>
    </div>
  );
}

export default PdfRender;