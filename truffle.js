module.exports = {
   /* solc: {
        optimizer: {
            enabled:    true,
            runs:       200000
        }
    },*/
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
  },
};
