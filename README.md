Short test suite to check how LevelUP, LevelDOWN, and memdown emit
`null` and `undefined` values via `.createValueStream`.

```shellsession
$ node test.js
TAP version 13
# leveldown
ok 1 undefined
not ok 2 should be equivalent
  ---
    operator: deepEqual
    expected: [ 1, null, undefined, 4 ]
    actual:   [ '1', '', '', '4' ]
    at: ReadStream.<anonymous> (./test.js:24:14)
  ...
# memdown
ok 3 undefined
not ok 4 should be equivalent
  ---
    operator: deepEqual
    expected: [ 1, null, undefined, 4 ]
    actual:   [ '1', 'null', 'undefined', '4' ]
    at: ReadStream.<anonymous> (./test.js:35:14)
  ...

1..4
# tests 4
# pass  2
# fail  2
```
