
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const fileName = _options.fileName || 'default.js';
    const content = 'console.log("Created with Schematics!");';
    tree.create(fileName, content);
    return tree;
  };
}
