/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Input selection"]
    B -->|yes| C["Valid"]
    B -->|no| D["Invalid"]
    C --> E["Home"]
    D -->|invalid| B
    E -->|valid| F["Output"]
    F --> G("End")
`;
module.exports = answer.trim();