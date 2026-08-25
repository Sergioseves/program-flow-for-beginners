/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Input assignment"]
    B --> C{"More assignments?"}
    C -->|yes| D["Process assignment"]
    D --> C
    C -->|no| E["Output summary"]
    E --> F("End")
`;

module.exports = answer.trim();