```bash
#install the Schematics command line tool globally
npm install -g @angular-devkit/schematics-cli

#The blank schematics either create a new project, or add a blank schematic to an existing project (it can be used for both). 
schematics blank --name=hello-world

#You can then cd into your new project, install your npm dependencies, and open your new collection using your favorite editor of choice:
cd hello-world
npm install
code . #for vs_code

#
npm run build
#zum Testen
schematics .:hello-world --file-name=myFile.js

cd ..
ng new schematics-test

#Im neu erstellten Projekt nutzen wir nun npm link, um unser Schematic-Projekt lokal als Dependency einzufügen. 
npm link ../hello-world
ng generate hello-world:hello-world --fileName=test.js

#
```