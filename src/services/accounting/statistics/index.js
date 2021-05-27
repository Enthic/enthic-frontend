function generateRandomStatistic() {
  var SCORE_DESCRIPTION = {
    1: "Pourcentage du résultat d'exploitation distribué en participation et impôts",
    2: "Pourcentage de la masse salariale dans le total des charges d'exploitation",
    3: "Ratio entre les cotisation sociales et les salaires",
  };

  return {
    1: {
      value: Math.random(),
      description: SCORE_DESCRIPTION[1],
    },
    2: {
      value: Math.random(),
      description: SCORE_DESCRIPTION[2],
    },
    3: {
      value: Math.random(),
      description: SCORE_DESCRIPTION[3],
    },
  };
}

const getStatisticDataFake = (companyData) => {
  var result = {
    1: {
      description:
        "Pourcentage du résultat d'exploitation distribué en participation et impôts",
      values: [],
    },
    2: {
      description:
        "Pourcentage de la masse salariale dans le total des charges d'exploitation",
      values: [],
    },
    3: {
      description: "Ratio entre les cotisation sociales et les salaires",
      values: [],
    },
  };

  for (var year in companyData.declarations) {
    var statistics = generateRandomStatistic();
    for (var statType in statistics) {
      result[statType].values.push(statistics[statType].value.toPrecision(2));
    }
    companyData.declarations[year].fakestatistics = statistics;
  }

  return result;
};

export { getStatisticDataFake };
