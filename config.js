module.exports = {
  platform: 'azure',
  endpoint: 'https://dev.azure.com/dennisendt/',
  token: process.env.TOKEN,
  hostRules: [
    {           
      "azureAutoApprove": true,
      "automerge": true
    },
  ],
  repositories: ['demo/gradle_sample_building_java_applications-kotlin-dsl'], // list of repos that should be watched by renovate bot
};
