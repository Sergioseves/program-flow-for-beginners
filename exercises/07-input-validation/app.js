/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Input email"]
    B --> C{"Valid email?"}
    C -->|invalid| D["Invalid"]
    D --> B
    C -->|valid| E("End")
`;

module.exports = answer.trim();