'use strict';

const fs      = require('fs');
const upath   = require('upath');

const virtualIndex = {};

const expose = (repositories) => {
  repositories.forEach((repository) => {
    const normalisedRepository = upath.normalize(repository);
    const files = fs.readdirSync(repository);

    let normalisedRepositoryName = '';

    if(normalisedRepository.split('/') === 0) {
      normalisedRepositoryName = normalisedRepository;
    } else {
      normalisedRepositoryName = normalisedRepository.split('/')[normalisedRepository.split('/').length - 1];
    }

    files.forEach((file) => {
      if(fs.statSync(upath.join(normalisedRepository, file)).isFile()) {
        virtualIndex[normalisedRepositoryName] = Object.assign(
          {},
          virtualIndex[normalisedRepositoryName],
          require(upath.join(normalisedRepository, file))
        );
      }

      if(fs.statSync(upath.join(normalisedRepository, file)).isDirectory()) {
        expose([upath.join(normalisedRepository, file)]);
      }
    });

  });

  return virtualIndex;
};

module.exports = expose;
