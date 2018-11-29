"use strict"

// check if user want to have exntend linking capability
const configOptions = [
    {
        type: 'confirm',
        message: 'TSLint extended (slower):',
        name: 'tsLint',
        default: false,
        when: answers => answers.framework && answers.framework === 'vuejs'
    },
    {
        type: 'confirm',
        message: 'Include Vuex:',
        name: 'VuexLibrary',
        default: false,
        when: answers => answers.framework && answers.framework === 'vuejs'
    }
]

module.exports = configOptions;
