
// Importing the class from the location of the file 
import * as VHDLFormatter from "./VHDLFormatter"; 

var sign_align_port = false;
var sign_align_function = false;
var sign_align_procedure = false;
var sign_align_generic = false;
var sign_align_all = true;
var align_comments = true;
var sign_align_mode = "local";
var new_line_after_port = "NewLine";
var new_line_after_then = "NewLine";
var new_line_after_semicolon = "NewLine";
var new_line_after_else = "NewLine";
var new_line_after_generic = "NewLine";
var use_space = false;
var cust_indent = " ";
var addNewLine = true;
var keywordcase = "LowerCase";
var typenamecase = "LowerCase";          
var endOfLine = "\r\n";

endOfLine = endOfLine.replace(/\\r/g, "\r");
endOfLine = endOfLine.replace(/\\n/g, "\n");

var indentation = "\t";
if (use_space) {
    cust_indent = cust_indent.replace(/\\t/, "	");
    indentation = cust_indent;
}

var newLineSettingsDict = {};
newLineSettingsDict["generic"] = new_line_after_generic;
newLineSettingsDict["generic map"] = new_line_after_generic;
newLineSettingsDict["port"] = new_line_after_port;
newLineSettingsDict["port map"] = new_line_after_port;
newLineSettingsDict[";"] = new_line_after_semicolon;
newLineSettingsDict["then"] = new_line_after_then;
newLineSettingsDict["else"] = new_line_after_else;
var newLineSettings = VHDLFormatter.ConstructNewLineSettings(newLineSettingsDict);
var signAlignKeywords: string[] = [];
if (sign_align_function) {
    signAlignKeywords.push("FUNCTION");
    signAlignKeywords.push("IMPURE FUNCTION");
}
if (sign_align_generic) {
    signAlignKeywords.push("GENERIC");
}
if (sign_align_port) {
    signAlignKeywords.push("PORT");
}
if (sign_align_procedure) {
    signAlignKeywords.push("PROCEDURE");
}
var sign_align: boolean = signAlignKeywords.length > 0;
let alignSettings = new VHDLFormatter.signAlignSettings(sign_align, sign_align_all, sign_align_mode, signAlignKeywords, align_comments)

let beautifierSettings = new VHDLFormatter.BeautifierSettings(
    false,
    false,
    false,
    alignSettings,
    keywordcase,
    typenamecase,
    indentation,
    newLineSettings,
    endOfLine,
    addNewLine);

declare function require(name:string);
const fs = require('fs')
const fileContents = fs.readFileSync('./mytext.txt').toString()

const output = VHDLFormatter.beautify(fileContents, beautifierSettings);

console.log(output);