// import the base16 file paths
import { listOfSchemes, arrayOfFile, readDir } from "./base16/schemes";
import fs from 'fs'

function main() {
  //initialize and welcome user to the scheme selector
  // pass an array of base16 scheme paths to the selector
  let out
  listOfSchemes()
    .then(console.log)
    .catch(console.error)
}

// Run the program
main();
