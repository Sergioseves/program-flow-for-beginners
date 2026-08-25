/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Input"]
    B --> C{"Age >= 21?"}
    C -->|yes| D{"Valid license?"}
    C -->|no| F["Home"]
    D -->|yes| E["Valid"]
    D -->|no| F
    E --> F
`;

module.exports = answer.trim();