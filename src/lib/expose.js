const fs      = require('fs');
const path    = require('path');

const virtualIndex = {};

const expose = (repositories) => {
  repositories.forEach(repository => {
    const files = fs.readdirSync(repository);
    console.log('repository ==> ', repository);
    const repositoryName = repository.match(/.*\/([A-Za-z-]+)/)[1];

    files.forEach((file) => {
      if(fs.statSync(path.resolve(repositoryName, file)).isFile()) {
        virtualIndex[repositoryName] = Object.assign({}, virtualIndex[repositoryName], require(path.resolve(repositoryName, file)));
      }

      if(fs.statSync(path.resolve(repositoryName, file)).isDirectory()) {
        expose([path.resolve(repositoryName, file)]); //FIXME POSIX problem
      }
    });

  });

  return virtualIndex;
};

module.exports = expose;
