
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([
      createFile(_options),
      doSomethingElse(_options)
    ]);
    return rule(tree, _context);
  };
}

function createFile(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const fileName = options.fileName || 'default.js';
    const content = 'console.log("Created with Schematics!");';
    
    tree.create(fileName, content);
    return tree;
  };
}

function doSomethingElse(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (!options.fileName) {
      const fileName = 'README1.md';
      const content = 'Please check default.js and adjust the name!';
      tree.create(fileName, content);
    }
    return tree;
  };
}
