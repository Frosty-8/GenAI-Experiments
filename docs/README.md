# Generative AI Experiments 🚀

This repository contains a curated collection of **12 hands-on experiments** that explore fundamental and advanced concepts in **Generative AI**.  
The experiments progress from basic tensor operations to autonomous AI agents, covering preprocessing, visualization, embeddings, diffusion models, transformers, bias analysis, and more.  

The project is designed for **learning, research, and showcasing on GitHub Pages** with interactive navigation.

---

## 📖 Experiments Overview

### **1. TensorFlow Tensor Operations**
- Create and manipulate tensors using TensorFlow 2.
- Demonstrate eager execution and computation graphs.
- Covers tensor creation, reshaping, slicing, and basic math operations.

### **2. Data Preprocessing for Generative AI**
- Handle missing data in small datasets (e.g., text/image metadata).
- Normalize numerical features for stable training.
- Encode categorical variables into machine-readable form.

### **3. Data Visualization**
- Use Matplotlib and Seaborn to analyze data distributions.
- Plot histograms, scatter plots, and correlation heatmaps.
- Helps identify patterns in generative AI datasets.

### **4. Word Embeddings + FAISS Similarity Search**
- Train **Word2Vec** embeddings on a small text corpus.
- Store embeddings in **FAISS** for fast similarity search.
- Explore semantic relationships (e.g., “hello” ~ “hi”).

### **5. Diffusion Model Inference (MNIST)**
- Implement inference with a pre-trained **Denoising Diffusion Probabilistic Model (DDPM)**.
- Generate synthetic MNIST images.
- Run on **Google Colab** for GPU support.

### **6. CLIP-Guided Diffusion (Text-to-Image)**
- Use **CLIP + diffusion models** to generate images from text prompts.
- Evaluate results with **Fréchet Inception Distance (FID)** or qualitative inspection.
- Showcase AI art creation workflows.

### **7. Transformer Text Generation with LoRA**
- Fine-tune a **DistilGPT-2** model using **LoRA (Low-Rank Adaptation)**.
- Train on a small text corpus for efficient adaptation.
- Generate coherent text and evaluate with **perplexity**.

### **8. Prompt Engineering with LLMs**
- Design prompts for summarization and Q&A tasks.
- Use Hugging Face GPT models for text generation.
- Evaluate outputs with **BLEU** and **ROUGE** metrics.

### **9. Retrieval-Augmented Generation (RAG)**
- Implement **RAG** using FAISS + a small pre-trained LLM.
- Retrieve relevant context before generation.
- Produce contextually accurate answers.

### **10. Model Optimization**
- Apply **pruning** and **quantization** to a small generative model (e.g., DistilBERT).
- Compare inference speed and memory usage.
- Highlight trade-offs between efficiency and accuracy.

### **11. Bias Detection & Mitigation**
- Analyze bias in outputs of pre-trained models (e.g., gender stereotypes).
- Apply a simple filtering technique to reduce biased terms.
- Evaluate mitigation effectiveness.

### **12. Autonomous AI Agent (Multi-Agent Simulation)**
- Implement a text-based **decision-making AI agent**.
- Simulate a simple environment with multiple agents.
- Analyze interactions and decision strategies.

---

## 🌟 Features
- Each experiment is **modular** and **self-contained**.
- JSON + HTML + CSS interface for **interactive viewing** on GitHub Pages.
- Smooth animations, pagination, and full-code preview.
- Educational resource for **students, researchers, and practitioners**.

---

## 📂 Repository Structure
```bash
├── index.html # Homepage with experiment previews
├── style.css # Modern styling
├── script.js # Pagination + interactivity
├── experiments.json # Stores all 12 experiments (title, desc, code)
├── /assets # Images, previews, logos
└── README.md # Documentation
```


---

## 🚀 How to Use

<p align="center">
  <a href="https://frosty-8.github.io/GenAI-Experiments/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Open%20Demo-Click%20Here-brightgreen?style=for-the-badge" alt="Open Demo"/>
  </a>
</p>

1. Browse experiments with pagination + animations.  
2. Click **“View Full Code”** for detailed implementations.  
3. Explore, learn, and adapt the code for your own projects.  

---

## 🧠 Learning Goals
- Understand **foundational AI/ML workflows**.
- Explore **Generative AI techniques** (diffusion, transformers, RAG).
- Practice **data preprocessing, visualization, and evaluation**.
- Gain insights into **bias, optimization, and agent simulation**.

---

## 📌 Notes
- Some experiments (e.g., diffusion models, LoRA fine-tuning) require **GPU support** (Google Colab recommended).
- Lightweight experiments (preprocessing, visualization, embeddings) can run on CPU locally.
- This repo is primarily for **educational and research purposes**.

---

## 🤝 Contributions
Pull requests and experiment extensions are welcome!  
If you’d like to add more generative AI experiments or improve visualizations, feel free to fork and contribute.  

---

## 📜 License
MIT License – free to use, modify, and share.  

---
