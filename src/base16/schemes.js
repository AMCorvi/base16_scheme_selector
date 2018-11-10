import fs from "fs";
import { homedir } from "os";

/**
 * create function that will output array containing file paths of the base16
 * scheme shell files
 *
 * @param {object} options={} collections of options for configuration and dependceny injection for testing purposes
 * @param {string} pathToSchemeDirectory path of the directory to the base16 scheme files
 * @returns {Promise<array>} of file paths
 */
export const readDir = (options = {}, pathToSchemeDirectory) => {
  return new Promise((resolve, reject) => {
    if (options.fs.hasOwnProperty("readdir")) {
      options.fs.readdir(pathToSchemeDirectory, "utf-8", (err, files) => {
        // if an error occures in reading the file directory
        //      - reject promise with error
        //  else
        //      - pass resolve promise with array of files
        if (err) return reject(err);
        else return resolve(files);
      });
    }
    // return definitive error when fs modules (or properly mocked alternative) is not passed
    else {
      return reject(
        new Error(
          `Expected 'options' variable to contain field 'fs' of type object which itself contains a readdir method, but such method was not available`,
          __filename
        )
      );
    }
  });
};

export const arrayOfFile = path => readDir({ fs: fs }, path);

export default function schemes() {
  return readDir(
    { fs: fs }
    ,homedir()+'/.config/base16-shell/scripts');
}
