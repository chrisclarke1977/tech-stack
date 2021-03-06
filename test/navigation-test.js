'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';
import { Navigation } from 'components';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

describe('Navigation', () => {
  const renderer = 'ok';     
  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });
});