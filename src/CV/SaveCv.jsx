import { saveAs } from "file-saver";
import pabloRibeiroResumePDF from "../CV/pabloRibeiroResume-Es-En.pdf"
export const SaveCV = async() => {
      try {
        const response = await fetch(pabloRibeiroResumePDF);
        const blob = await response.blob();
        saveAs(blob, 'pabloRibeiroResume.pdf');
      } catch (error) {
        console.error("Error fetching or saving the file", error);
      }
}  
