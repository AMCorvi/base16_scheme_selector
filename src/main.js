// import the base16 file paths
import fs from "fs";
import cp from "child_process";
import { homedir } from "os";

import inquirer from "inquirer";

import schemes from "./base16/schemes";

// Run the program
main(schemes);


function main(schemes) {
  schemes() // Promise which collects a list of file name of the colro schemes
    .then(shellFiles => schemesSelector(shellFiles)) // activate interactive terminal
    .catch(function(err) {
      throw err; //terminal program upon failure
    });
}

/**
 * initiates the interactive terminal list by which the user selects
 * which base16 color scheme they wish to use
 * @param {array} listOfSchemes a list of file names for the various base16 color schemes
 */
function schemesSelector(listOfSchemes) {
  const interogatives = [
    {
      type: "list", // type of menu in which to use
      name: "scheme_selector", // name of result
      message: "Pick a mood?", // prompt for switching styles
      choices: listOfSchemes // selection from which to choose
    }
  ];

  inquirer.prompt(interogatives).then(res => {
    console.log(
      `Activating ~/.config/base16-shell/scripts/${res.scheme_selector}`
    );
    return executeSchemeChange(res.scheme_selector)
  });
}

/**
 * spawn a new terminal process by which to execute the provided terminal scheme script
 *
 * @param {string} scheme filename of the desired terminal scheme script
 * @returns {<Child_Process> } Object container of the child_process spawned to execute command
 */
export function executeSchemeChange(options, scheme, test_command) {
  return cp.exec(
    test_command || `bash ${scheme}`,
    {
      cwd: options.cwd || `${homedir()}/.config/base16-shell/scripts`
    },
    (err, stdout, stderr) => {
      if (err)  throw err;
      else if (stderr) return console.warn("Failure of spawn process:\n", stderr);
      console.log(stdout);
    }
  );
}

