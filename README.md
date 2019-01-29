# Virtual-index
Virtual index.js for your repositories

## Goal
Access all your exports from selected directories in your project from a single entry point. It utilise repositories names, files names and exports names as a structure and put it in an object.

## Install
npm install --save virtual-index

## Example
In the test folder of the project, you will find a fixture repository. The npm test command will launch it.
Let's view it's structure:

```
|-- fixtures
    |-- example1.js
    |-- example2.js
    |-- exemple3.js
    |-- deep-example
        |-- deep-example1.js
```

Each **.js** files in this structure has it own sets of exports. The expected virtual index object exposed by this structure will be:

```javascript
{
  'deep-example': {
    'deep-example1': {
      deepExemple1a: 'deep_a',
      deepExemple1b: 'deep_b'
    }
  },
  fixtures: {
    example1: {
      exemple1a: 'a',
      exemple1b: 'b'
    },
    example2: {
      exemple2a: 'a2',
      exemple2b: 'b2'
    },
    example3: {
      exemple3a: 'a3',
      exemple3b: '3b'
    }
  }
}
```

Poorly name choices were made to make a statement: **You shall name your directories and files correctly !!**

## Usage
For now virtual-index in ment to be use as you want to, put it in a global varable, in your main file, or where ever you want. This choice will probably be implement as some kind of options in the future.

## TODO
- Add options to select or ignore some files or exports
- Add warnings on directories and file namings
