<template>
  <Widget
    title="Comparaison de l'impact social (version demo)"
    titleColor="#99ff99"
    v-if="companyData"
  >
    <p>
      Attention, les valeurs des indicateurs ci-dessous ont été générées pour
      donner un aperçu visuel, mais elles n'ont pas été calculées sur les
      données réelles. C'est temporaire, le temps qu'on implémente ces calculs
      au niveau de la base de données
    </p>
    <div class="control-bar">
      <div class="title is-6 m-r-30">Comparaison avec code APE :</div>
      <label v-for="ape in apeCodes" v-bind:key="ape" class="radio">
        <input type="radio" name="answer" />
        {{ ape }}
      </label>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Indicateur</th>
          <th
            v-for="oneYear in companyData.declarations"
            v-bind:key="oneYear.declaration.value"
          >
            {{ oneYear.declaration.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="statType in companyData.statistics" v-bind:key="statType.id">
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
  </Widget>
</template>

<script>
import Widget from "./Widget.vue";

export default {
  name: "CompanySocialImpactComparison",
  template: "#item-template",
  props: {
    companyData: Object,
  },
  components: {
    Widget,
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

<style lang="scss">
.control-bar {
  margin: 0.5rem 0;
  border: solid 0px #aaa;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  line-height: 1rem;
}

.statsValue {
  font-weight: bold;
}

.tooltip:focus::before,
.tooltip:hover::before,
.tooltip.is-tooltip-active::before {
  z-index: 1;
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
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
