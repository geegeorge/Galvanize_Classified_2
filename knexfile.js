'use strict';

module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/classified'
 },
 test: {
   client: 'pg',
   connection: 'postgres://localhost/classified_test'
 }

 }
