<template>
  <div class="columns">
    <div class="column">
      <div class="box">
        <h3 class="title is-3">
          Comparaison de l'impact social (version demo)
        </h3>
        <p>
          Attention, les valeurs des indicateurs ci-dessous ont été générées
          pour donner un aperçu visuel, mais elles n'ont pas été calculées sur
          les données réelles. C'est temporaire, le temps qu'on implémente ces
          calculs au niveau de la base de données
        </p>
        <div class="control">
          <label v-for="ape in apeCodes" v-bind:key="ape" class="radio">
            <input type="radio" name="answer" />
            Comparaison avec code APE {{ ape }}
          </label>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Indicateur</th>
              <th
                v-for="(yearData, yearName) in companyData.declarations"
                v-bind:key="yearName"
              >
                {{ yearName }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="statType in companyData.statistics"
              v-bind:key="statType.id"
            >
              <td>{{ statType.description }}</td>
              <td
                v-for="value in statType.values"
                class="statsValue"
                v-bind:style="{ color: getColor(value) }"
                v-bind:key="value.id"
              >
                <div class="tooltip">
                  <span class="tooltiptext">{{ getTooltip(value) }}</span>
                  {{ value }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanySocialImpactComparison",
  template: "#item-template",
  props: {
    companyData: Object,
  },
  data: function () {
    return {
      apeSelected: null,
    };
  },
  computed: {
    deciles: function () {
      var result = [];
      for (var i = 0; i < 10; i++) {
        result.push(Math.random());
      }
      result.sort();
      return result;
    },
    apeCodes: function () {
      var randomApe = Math.floor(Math.random() * 9999).toString();
      while (randomApe.length < 4) {
        randomApe = "0" + randomApe;
      }
      return [randomApe, randomApe.substring(0, 3), randomApe.substring(0, 2)];
    },
  },
  methods: {
    getDecile: function (value) {
      for (var i = 0; i < 10; i++) {
        if (value < this.deciles[i]) {
          return i;
        }
      }
      return 9;
    },
    getColor: function (value) {
      var colorsGradient = [
        "#f80d01",
        "#f73302",
        "#f66403",
        "#f49404",
        "#F2C307",
        "#f1f108",
        "#BEEF09",
        "#8FED0C",
        "#63EC0D",
        "#37EA0E",
      ];
      return colorsGradient[this.getDecile(value)];
    },
    getTooltip: function (value) {
      return "dans le décile " + this.getDecile(value);
    },
  },
};
</script>

<style>
body {
  color: #444;
}

li {
  cursor: auto;
}

.item {
  cursor: pointer;
}

.statsValue {
  font-weight: bold;
}

ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
