/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Start") --> B["Input age"]
    B --> C{"Age >= 18?"}
    C -->|yes| D["Allowed"]
    C -->|no| E["Denied"]
    D --> F("End")
    E --> F
`;
// Do not modify this
module.exports = answer.trim();