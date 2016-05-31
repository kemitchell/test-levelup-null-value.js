var leveldown = require('leveldown')
var levelup = require('levelup')
var memdown = require('memdown')
var tape = require('tape')

var batch = [
  { type: 'put', key: 'a', value: 1 },
  { type: 'put', key: 'b', value: null },
  { type: 'put', key: 'c', value: undefined },
  { type: 'put', key: 'd', value: 4 } ]

var putValues = batch.map(function(operation) {
  return operation.value })

tape('leveldown', function(test) {
  test.plan(2)
  var store = levelup('level', { db: leveldown })
  store.batch(batch, function(error) {
    test.ifError(error)
    var gotValues = [ ]
    store.createValueStream()
      .on('data', gotValues.push.bind(gotValues))
      .on('end', function() {
        test.deepEqual(gotValues, putValues) }) }) })

tape('memdown', function(test) {
  test.plan(2)
  var store = levelup('level', { db: memdown })
  store.batch(batch, function(error) {
    test.ifError(error)
    var gotValues = [ ]
    store.createValueStream()
      .on('data', gotValues.push.bind(gotValues))
      .on('end', function() {
        test.deepEqual(gotValues, putValues) }) }) })
