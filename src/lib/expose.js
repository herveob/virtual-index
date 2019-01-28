'use strict';

const fs      = require('fs');
const path    = require('path');
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
          require(path.resolve(normalisedRepository, file))
        );
      }

      if(fs.statSync(path.resolve(normalisedRepository, file)).isDirectory()) {
        const deepPath = upath.normalize(path.resolve(normalisedRepository, file));

        expose([deepPath]);
      }
    });

  });

  return virtualIndex;
};

module.exports = expose;
