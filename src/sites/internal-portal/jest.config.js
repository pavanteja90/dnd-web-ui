module.exports = {
  name: 'aquamore',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/aquamore',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
