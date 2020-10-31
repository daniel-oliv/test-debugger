export const exportedConstant = 'I am a exported!'
export var exportedVariable = 'I am a exported too!'

const internalConstant = 'I am NOT exported!'
var internalVariable = 'I am a NOT exported too!'

export function fun(){
  return 'I am a exported function'
}

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
    console.log(exportedConstant);
    console.log(exportedVariable);

    console.log(internalConstant);
    console.log(internalVariable);

    console.log(fun());

    console.log(`
    Put a breakpoint here 
    and try to watch the exported elements, const and var, 
    or put the mouse over than.
    Just the non-exported var and const are available to debug. 
    Although they are printed in DEBUG CONSOLE and exported function is available too
    Thanks for all!`)
   return true;
  }

}


export const main = new Main();