# **ReadmeGenAI**

🛠️ **Weekend Fun Project** to explore **RAG (Retrieval-Augmented Generation)** using LangChain, OpenAI, and the GitHub API — introducing **ReadmeGenAI**, an intelligent tool to automatically generate high-quality `README.md` files from GitHub repositories! 📄✨  

## **Index**  
1. [Introduction](#introduction)  
2. [Demo](#demo)  
3. [Features](#features)  
4. [Technologies](#technologies)  
5. [Repositories](#repositories)  
6. [Contributing](#contributing)  

---

## <a name="introduction"> **Introduction** </a>  

**ReadmeGenAI** is a **readme.md generator powered by AI** that uses **LangChain’s RAG pipeline** and the **GitHub API** to crawl through any public repository and intelligently generate a clean, structured, and professional README file.  

Whether you're working on a new open-source project, organizing documentation, or just want to boost the quality of your GitHub profile — this tool makes it seamless.  

📌 **Built over the weekend** to explore RAG workflows and GitHub API limits!  

---

## <a name="demo"> **Demo** </a>  

🔗 **Live Site:** [https://github-readme-frontend.vercel.app/](https://github-readme-frontend.vercel.app/)  
📽️ **Demo Video:** 

https://github.com/user-attachments/assets/9e7fc4d7-f57c-42eb-a02c-dc608774a5e3



---

## <a name="features"> **Key Features** </a>  

✅ **Crawls GitHub Repositories** – Uses GitHub API to extract code structure, file contents, and more.  
✅ **LangChain RAG Pipeline** – Employs Retrieval-Augmented Generation with OpenAI to produce accurate and meaningful readmes.  
✅ **Embeddings & Vector Search** – Converts file contents to vector embeddings and stores them for efficient retrieval.  
✅ **OpenAI Function Calling** – Uses structured function calls to ensure the output is well-formatted and sectioned.  
✅ **Rate-Limit Handling** – Smart fallbacks for API limitations with developer-friendly error handling.  
✅ **Fully Serverless** – Frontend and backend are hosted on Vercel, making the app fast and globally accessible.  
✅ **Modern UI** – Clean interface using Tailwind CSS and ShadCN UI for optimal usability.  

---

## <a name="technologies"> **🛠 Tech Stack** </a>  

**Frontend:**  
- Next.js (App Router)  
- Tailwind CSS  
- ShadCN UI  

**Backend:**  
- LangChain JS  
- OpenAI API  
- GitHub REST API v3  
- Vector Store: HNSWLib  

**Hosting:**  
- Vercel (both frontend & backend)  

---

## <a name="repositories"> **📂 Repositories** </a>  

🔹 **Backend Repository:** [https://github.com/MYSELF-SAYAN/github_readme_backend](https://github.com/MYSELF-SAYAN/github_readme_backend)  

---

## <a name="contributing"> **Contributing** </a>  

Contributions, suggestions, or feature requests are more than welcome! 🚀  

📌 **How to Contribute:**  
1. Fork this repository.  
2. Create a new branch (`feature-branch`).  
3. Commit your changes.  
4. Push the branch and open a PR.  

Feel free to raise issues for bugs, enhancements, or ideas!  

🙌 Let’s make README generation smarter, faster, and developer-friendly — together!  
