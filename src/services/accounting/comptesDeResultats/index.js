import { convertDataToTree } from "./FillArbreCompteDeResultat.js";
import { checkTreeData } from "./CheckAndCompleteCompteDeResultat.js";
import { computeScore } from "./ComputeCompanyYearScore.js";

const calculateComptesDeResultats = (declarations) => {
  if (!declarations) {
    return null;
  }

  const comptesDeRésultats = [];
  for (var year in declarations) {
    comptesDeRésultats.push(declarationToTree(declarations[year], year));
  }
  return comptesDeRésultats;
};

const declarationToTree = (declaration, year) => {
  var yearTree = convertDataToTree(declaration.financial_data);
  checkTreeData(yearTree);
  yearTree.scores = computeScore(yearTree);
  yearTree.year = year;
  return yearTree;
};

export { calculateComptesDeResultats };
