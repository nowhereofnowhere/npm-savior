'use strict';

import path from 'path';
import fs from 'fs';
import {expect} from 'chai';
import parse from '../parser';


describe('#parser', function () {

  it('should create json object based on package-lock.json', () => {
    let file = path.join(path.dirname(fs.realpathSync(__filename)), './fixtures/simple-object.json');
    const json = parse(file);
    expect(json).to.include({"version": "0.0.1"})
  });

});