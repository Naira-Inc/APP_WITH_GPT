const fs = require("fs");

// grab the component name from the command
const componentName = process.argv[2];

// boilerplate for components/${componentName}/index.tsx
const indexTemplate = `export { ${componentName} } from "./${componentName}"`;

// boilerplate for the actual component, components/${componentName}
const componentTemplate = `
export const ${componentName} = () => {
  return (
      <div>Welcome to ${componentName}</div>
  );
}
`;

// create a directory for the component
fs.mkdirSync("./src/components/" + componentName);
fs.mkdirSync(`./src/components/${componentName}/__tests__`);
// create files and drop in boilerplate
fs.writeFileSync(
  `./src/components/${componentName}/index.tsx`,
  indexTemplate.trim()
);
fs.writeFileSync(`./src/components/${componentName}/__tests__/index.tsx`, "");

fs.writeFileSync(
  `./src/components/${componentName}/${componentName}.tsx`,
  componentTemplate.trim()
);

console.log(`🚀 - ${componentName} created successfully`);
