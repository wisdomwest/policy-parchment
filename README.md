# 🏙️ BiB (BuildItBetter): AI-Driven Urban Planning Using NASA Earth Observation Data

**Empowering sustainable city growth in Kenya through data-driven insights.**

## 🌍 Overview

**BuildItBetter (BiB)** is an AI-powered urban planning platform designed to assist planners and decision-makers in fast-growing Kenyan cities like **Lukenya**. By harnessing **NASA Earth observation data**, BiB delivers actionable insights that promote **human wellbeing**, **economic development**, and **environmental resilience** in the face of rapid urbanization and climate change.


## 🚀 What It Does

BiB integrates **satellite-derived datasets** with AI analytics to generate real-time and predictive insights for sustainable urban development. Key features include:

* **Land-use zoning predictions**
* **Infrastructure optimization** (e.g., road network planning)
* **Critical facility siting** (e.g., waste management centers)
* **Public health corridors** to reduce exposure to pollutants
* **Urban sprawl mitigation** through hotspot modeling
* **Climate vulnerability forecasting** (floods, droughts, heatwaves)
* **Agricultural intensification strategies** in suitable zones
* **Low-impact land-use recommendations** (e.g., aquaculture)

These insights are served through **FastAPI endpoints**, orchestrated via **n8n workflows**, and powered by **AI agents** accessing a **Chroma vector database** of spatial-temporal datasets.

---

## 🛰️ Data Sources

BiB leverages multiple NASA Earth observation missions:

| Dataset                      | NASA Mission   | Use Case                                 |
| ---------------------------- | -------------- | ---------------------------------------- |
| **Land Use / Land Cover**    | Landsat        | Urban expansion tracking                 |
| **Air Quality**              | MODIS, TROPOMI | Pollution and health corridor planning   |
| **Vegetation Health (NDVI)** | MODIS, Landsat | Green space and food security assessment |
| **Water Resources**          | GRACE          | Monitoring water availability            |
| **Urban Heat Island**        | ASTER          | Urban climate stress forecasting         |


## 🌆 Why It Matters

Kenya’s urban population is projected to exceed **50% by 2050**, intensifying pressure on:

* **Ecosystems**
* **Infrastructure**
* **Public health**
* **Natural resources**

Traditional planning methods are often **reactive**, leading to:

* Environmental degradation
* Social inequities
* Poor infrastructure integration

BiB transforms this paradigm by providing **proactive**, **data-driven**, and **inclusive planning tools** that help cities grow **equitably** and **resiliently**, in alignment with:

* **SDG 11**: Sustainable Cities and Communities
* **SDG 3**: Good Health and Wellbeing
* **SDG 13**: Climate Action


## 🛠️ Architecture & Technology Stack

* **Data Storage**: [ChromaDB](https://www.trychroma.com/) – for fast, vector-based spatial querying
* **Backend**: [FastAPI](https://fastapi.tiangolo.com/) – for serving insights via API endpoints
* **Workflow Automation**: [n8n](https://n8n.io/) – for orchestrating AI agent tasks
* **AI Agents**: Custom models analyzing spatial, temporal, and environmental trends
* **Presentation Layer**: Interactive web dashboard + supplementary video case studies


## 📽️ Project Presentation & Use Case

The project will be presented via:
Youtube Video - https://www.youtube.com/watch?v=Vk2tWF_AwDQ

* A **web-based interactive dashboard**
* A **video demo** exploring real-world applications, such as:

  * Evaluating the **feasibility of a steel manufacturing plant** in Lukenya
  * Assessing its **impact on land use, population density, and agriculture zones**
  * Balancing economic growth with **environmental and public health trade-offs**


## ✅ Use Cases

* **Urban Planners**: Optimize zoning, infrastructure, and housing development
* **Policy Makers**: Develop equitable and sustainable growth strategies
* **Environmental Agencies**: Monitor ecological impacts of urban sprawl
* **Investors**: Make data-driven decisions on industrial site locations


## 📦 Installation & Deployment

*Coming soon.*
The platform will be deployed as a cloud-based solution, accessible through authenticated endpoints. A Docker-based deployment guide and dataset ingestion pipeline will be included in the next release.


## 🧩 Future Enhancements

* Mobile-accessible planning assistant
* Integration with local data sources (e.g., census, municipal GIS)
* Scenario simulation interface for multi-stakeholder collaboration
* Real-time alerts on emerging environmental risks


## 🤝 Acknowledgments

This project is made possible by:

* **NASA Earth Science Division**
* **Open-source contributions** from the AI, geospatial, and urban planning communities

> *BiB helps build cities not just for today, but for the future—smarter, greener, and fairer.*
