- hwo use cypress grep plugin 

- 1: install grep plugin 

npm i -D @cypress/grep

- 2: add this in e2e.js

const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

- 3: add this in cypress.config.js

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});

- 4: run test using

-filtre by title:

npx cypress run --env grep=hello

 -filtre by test suite (run any tests in the blocks including cart): 

npx cypress run --env grep=cart

-invert filtre (reverse filtre): 

npx cypress run --env grep=-fail

 -filtre by tag (add tag into test case title, ex {tags: 'test'})

npx cypress run --env grepTags=test

 -filter by tag and require tags to be presents using + (add tag into test case title, ex {tags: ['@test', '@test1]})

npx cypress run --env grepTags=@test+@test1

 -filter by tag one tag or another using spaces (add tag into test case title, ex {tags: ['@smoke', '@sanity]})

npx cypress run --env grepTags='@smoke @sanity'