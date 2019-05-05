import {expect} from 'chai'; //assertion librady function
import jsdom from 'jsdom'; // interact with dom
import fs from 'fs'; //inetract with filesystem

describe ('Our first test', function() {
    it('should pass', function() {
        expect(true).to.equal(true);
    });
});

describe ('index.html', function() {
    it('should say hello', function(done) {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Objektų vietų parinkimo programa');
            done();
            window.close();
        });
    });
});

