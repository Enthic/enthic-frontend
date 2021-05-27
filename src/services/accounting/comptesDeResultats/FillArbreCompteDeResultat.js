/**
The function convertDataToTree takes an empty CompteDeResultat tree from "arbreCompteDeResultat.json" file,
and fill it with data from enthic API
*/
import arbreCompteDeResultat from "./arbreCompteDeResultat.json";

export function convertDataToTree(rawData) {
  var newTree = JSON.parse(JSON.stringify(arbreCompteDeResultat));
  recursiveFillTree(newTree, rawData);
  return newTree;
}

function recursiveFillTree(treeToFill, rawData) {
  // Begin to fill children if there is children
  if (treeToFill.children) {
    for (var childName in treeToFill.children) {
      recursiveFillTree(treeToFill.children[childName], rawData);
    }
  }

  // Find corresponding value from rawData
  for (var property in rawData) {
    if (treeToFill.codeLiasses.indexOf(property) > -1) {
      treeToFill.data = rawData[property];
      treeToFill.data.status = "official";
      treeToFill.data.code = property;
      delete rawData[property]; // Remove used data from rawData
    }
  }
}
