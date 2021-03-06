// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: @loopback/testlab
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const nodeMajorVersion = +process.versions.node.split('.')[0];
module.exports = nodeMajorVersion >= 7 ?
  require('./lib/testlab') :
  require('./lib6/testlab');
