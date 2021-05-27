const getYearData = (companyData) => {
  var formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
  });
  const result = [];

  for (let year in companyData.declarations) {
    let yearDataItem = {
      year: year,
      data: {},
    };
    let yearData = companyData.declarations[year];
    for (var yearProp in yearData.financial_data) {
      yearDataItem.data[yearProp] = {
        description: yearData.financial_data[yearProp].description,
        value: formatter.format(yearData.financial_data[yearProp].value),
      };
    }
    result.push(yearDataItem);
  }
  return result;
};

export { getYearData };
