import { calculateComptesDeResultats } from "./comptesDeResultats";
import { getFlatData } from "./flatData";
import { getYearData } from "./yearData";
import { getLastEffectifFromYearData } from "./lastEffectif";
import { getStatisticDataFake } from "./statistics";

/**
 * Add comptes De Résultats
 */
const addAccountingCalculations = (companyData) => {
  if (!companyData) {
    // throw new Error("Entreprise non trouvé");
    return null;
  }
  const comptesDeResultats = calculateComptesDeResultats(
    companyData.declarations
  );
  const flatData = getFlatData(companyData);
  const yearData = getYearData(companyData);

  const lastEffectif = getLastEffectifFromYearData(yearData);

  const statistics = getStatisticDataFake(companyData);

  return {
    ...companyData,
    comptesDeResultats,
    flatData,
    yearData,
    lastEffectif,
    statistics,
  };
};

export default {
  addAccountingCalculations,
};
