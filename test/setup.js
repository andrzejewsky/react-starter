import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';
import fetch from 'node-fetch';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});


global.React = React;
global.expect = expect;
global.fetch = fetch;
