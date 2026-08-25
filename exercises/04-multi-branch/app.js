/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Input light color"]
    B -->|yes| C["Home"]
    B -->|no| D["Output action"]
    C --> E("End")
`;


module.exports = answer.trim();