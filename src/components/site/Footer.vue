<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <!-- LOOP FOOTER BLOCKS -->
        <div class="column is-5 is-offset-1">
          <!-- BLOCK TITLE -->
          <h3 class="is-3">Aller plus loin</h3>
          <ul>
            <li>
              <a href="https://www.enthic.fr/"
                >La base de données Enthic.fr utilisée ici</a
              >
            </li>
            <li>
              <a
                href="https://www.inpi.fr/fr/licence-registre-national-du-commerce-et-des-societes-rncs"
                >La source officielle des données sur l'INPI</a
              >
            </li>
            <li><a href=""></a></li>
          </ul>
        </div>

        <div class="column is-5 is-offset-1">
          <!-- BLOCK TITLE -->
          <h3 class="is-3">Participer</h3>
          <ul>
            <li>
              <a href="https://chat.codefor.fr"
                >Le chat pour venir nous parler</a
              >
            </li>
            <li>
              <a href="https://github.com/phe-sto/enthic"
                >Code source du back</a
              >
            </li>
            <li>
              <a href="https://github.com/CodeforFR/enthic-dataviz"
                >Code source du front</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.enthic-name {
  text-decoration: underline;
  color: black;
  font-weight: bold;
}

.layout {
  padding: 1rem 0;
  text-align: center;
}
</style>
