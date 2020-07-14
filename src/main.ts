export class Main {
  
  constructor(){
    this.start();
  }
  // async starts
  async start(){
    try {
     await this.testDebbuger();
    } catch (error) {  
      console.error(error.stack);
    }
  }
  async testDebbuger(){
   console.log("Put a breakpoint here and press F10 or click in 'Step Over' sequecially until open a internal node file")
   return true;
  }

}


export const main = new Main();