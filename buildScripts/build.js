/*eslint-disable no-console*/
/*eslint-disable no-unused-vars*/

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
import wget from 'node-wget';

process.env.NODE_ENV = 'production';



console .log(chalk.green('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run(function(err, stats) {
    if (err) { // fatal error, stop here
        console.log(chalk.red(err));
        return 1;
    }

    // optional code to display stats

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(function(error){
            console.log(chalk.red(error));
        });
    }

    if (jsonStats.hasWarnings){
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(function(warning){
            console.log(chalk.yellow(warning));
        });
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far the build suceeded
    console.log(chalk.green('Your app has been built for production and written to /dist'));

    return 0;
});

console .log(chalk.green('Downloading latest shapefile.'));

wget({
    url: 'https://www.eea.europa.eu/data-and-maps/data/eea-reference-grids-2/gis-files/lithuania-shapefile/at_download/file',
    dest: './dist/lithuania.zip'
})
