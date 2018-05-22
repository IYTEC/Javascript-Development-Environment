const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

describe('Our first test', () => {
  it('should pass', () => {
    chai.expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', done => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementById('main-heading');
    chai.expect(h1.innerHTML).to.equal('Hello World!');
    done();
    dom.window.close();
  });
});
