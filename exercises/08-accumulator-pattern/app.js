/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Input item price"]
    B --> C{"More items?"}
    C -->|yes| B
    C -->|no| D["Output total"]
    D --> E("End")
`;


module.exports = answer.trim();