# 📘 Prompt Engineering Cheat Sheet

A concise collection of prompt engineering techniques with definitions, explanations, and examples.  
Perfect for quick reference while working with LLMs.

---

## Techniques

| # | Technique | What it is | Why it works | Example |
|---|-----------|------------|--------------|---------|
| 1 | **Role Assignment (Persona / Instruction Framing)** | Tell the model who it should act as. | Sets context and biases responses toward the desired tone, expertise, or format. | ❌ "Explain recursion."<br>✅ "You are a computer science professor teaching undergraduates. Explain recursion with a simple analogy." |
| 2 | **Few-Shot Prompting** | Provide a few input → output examples before the real task. | Helps the model learn the desired pattern and structure. | ```<br>Q: Translate "apple" to Spanish.<br>A: manzana<br>Q: Translate "dog" to Spanish.<br>A: perro<br>Q: Translate "house" to Spanish.<br>A:``` |
| 3 | **Chain-of-Thought (CoT) Prompting** | Ask the model to reason step by step before answering. | Reduces errors in math, logic, and multi-step reasoning. | "Explain your reasoning step by step before giving the final answer." |
| 4 | **Self-Consistency** | Generate multiple reasoning paths, then pick the best one. | Avoids reliance on a single possibly flawed chain of reasoning. | "Give three different ways to solve this problem, then choose the best solution." |
| 5 | **Scoring / Ranking** | Generate multiple outputs, then evaluate or rank them. | Uses the model as both generator and evaluator, improving quality. | "Here are three answers to the same question. Score each from 1–5 for clarity, then choose the best one." |
| 6 | **Reflexion / Self-Critique** | Ask the model to review and refine its own answer. | Encourages error detection and correction. | "Draft an answer. Then check for possible mistakes and correct them." |
| 7 | **Multi-Step Prompting** | Break a complex task into smaller steps. | More reliable than asking everything at once. | Step 1: "Extract key entities from this text."<br>Step 2: "Summarize the relationships between the entities." |
| 8 | **Reframing / Style Transfer** | Ask the model to rewrite in a different style, tone, or level. | Adapts content for different audiences or contexts. | "Rewrite the explanation for a 10-year-old." |
| 9 | **External Knowledge Grounding (RAG-style prompting)** | Provide the model with documents or facts before the question. | Anchors responses to real data, reducing hallucination. | "Based on the following document, answer the user’s question: …" |

---

## ⭐ Contributing
Feel free to submit PRs with new techniques, improvements, or better examples.

---

## 📜 License
MIT License

