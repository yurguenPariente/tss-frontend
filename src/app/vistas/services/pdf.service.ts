import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  pdfObj:any;
  generando: boolean = false;
  constructor() { }

  public downloadPDF(): void {
   // this.pdfObj = pdfMake.createPdf(docDefinition);
      const DATA = document.getElementById("htmlData");
      const doc = new jsPDF('p', 'pt', 'a4');
      const date = new Date();
      const fecha = date.toTimeString()
      doc.text(`Resultados de la simulacion ${fecha}` ,10,10)
      const options = {
        background: 'black',
        scale: 2,
        orientation: "landscape",
        unit: "in",
        format: [2, 2]
      };
      html2canvas(DATA, options).then((canvas) => {
        this.generando=true;
      const img = canvas.toDataURL('image/PNG');
  
      // Add image Canvas to PDF
      const bufferX = 200;
      const bufferY = 13;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      
      return doc;
    }).then((docResult) => {

      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
      window.location.reload();
    })
    }
  
    
  // openFile(){
  //  if( this.platform.is("cordova")){
  //     this.pdfObj.getBuffer((buffer) => {
  //       var blob = new Blob([buffer],{type:"application/pdf"});
  //       this.file.writeFile(this.file.dataDirectory, "Informe_Simulacion.pdf",blob,{replace:true}).then(fileEntry => {
  //         this.fileOpener.open(this.file.dataDirectory + "Informe_Simulacion.pdf","applocation/pdf");
  //       })
  //     })
  //     return true;
  //   }
  //   this.pdfObj.download()
  // }
  
}
