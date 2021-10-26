# Reduce Problem 1

Convert an Array into key by an object's tag name.

From.
```text
array = [
{id: 123, tags: ['TABLE']},
{id: 456, tags: ['TABLE']},
{id: 233, tags: ['DESK']}
];
```
To.
```text
{
 TABLE: [
    { id: 123, tags: [ 'TABLE' ] },
    { id: 456, tags: [ 'TABLE' ] }
  ],
  DESK: [
    { id: 233, tags: [ 'DESK' ] }
  ]
}
```
