global.fetch = require('jest-fetch-mock')

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
