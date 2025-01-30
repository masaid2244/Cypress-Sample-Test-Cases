
# 🌟 **Cypress Sample Test Cases : Learn Automation with Cypress** 🌟

Welcome to the **Cypress Basics** repository! 🎉 This project is designed to help you **learn and master the fundamentals of Cypress**, a cutting-edge JavaScript-based end-to-end testing framework. Whether you're just starting out or looking to solidify your understanding of the basics, this repo is the perfect place to start! 🚀

---

## 📚 **Table of Contents**

1. [📘 Project Overview](#-project-overview)  
2. [🚀 Features and Topics Covered](#-features-and-topics-covered)  
3. [🛠️ Getting Started](#%EF%B8%8F-getting-started)  
4. [🎯 Purpose of This Repository](#-purpose-of-this-repository)  
5. [💡 Why Use This Repository?](#-why-use-this-repository)  
6. [🙌 How to Contribute](#-how-to-contribute)  
7. [💬 Contact and Feedback](#-contact-and-feedback)  

---

## 📘 **Project Overview**

This repository is a collection of **practice test cases** I created while learning Cypress from various online tutorials (primarily YouTube). 🧑‍💻 The main focus is on **mastering the basics**, as strong foundational skills are crucial for advanced automation tasks. 

Each test case is:
- 🔍 **Thoroughly Commented** for better understanding.
- 🏗️ **Structured** for easy navigation.
- 🛠️ **Practical** to replicate real-world scenarios.

If you're an aspiring automation tester or QA professional, clone this repository and start learning today! 🌟

---


## 🚀 **Features and Topics Covered**

This repository contains **40 Cypress automation test cases** covering various UI functionalities, alerts, tables, dropdowns, file uploads, and more. Below is a quick overview of the test cases included:

### **Test Cases List:**

| **Category**                | **Test Case**                                                                 | **File**                                                   |
|-----------------------------|-------------------------------------------------------------------------------|------------------------------------------------------------|
| ✅ **Basic Cypress Tests**   | 00 - Demo Test                                                                | 00_TC_demotest1.cy.js                                      |
|                             | 01 - Launch URL                                                              | 01_TC_LaunchURL.cy.js                                      |
|                             | 02 - XPath Locators                                                          | 02_TC_Xpath.cy.js                                          |
| 🔎 **Assertions & Validations** | 03 - Implicit Assertions                                                   | 03_TC_ImplicitAssertions.cy.js                             |
|                             | 04 - Explicit Assertions                                                     | 04_TC_ExplicitAssertions.cy.js                             |
| 🎯 **Form Elements**         | 05 - Radio Button Selection                                                  | 05_TC_RadioButton.cy.js                                    |
|                             | 06 - Checkboxes Selection                                                   | 06_TC_CheckBoxes.cy.js                                     |
| 📌 **Dropdown Handling**     | 07 - Dropdown with `<select>` Tag                                            | 07_TC_DropDown_SelectTagg.cy.js                            |
|                             | 08 - Dropdown without `<select>` Tag                                         | 08_TC_Dropdown_withoutSelectTagg.cy.js                      |
|                             | 09 - Static Search Dropdown                                                 | 09_TC_Dropdown_staticSearch.cy.js                           |
|                             | 10 - Dynamic Dropdowns                                                      | 10_TC_DynamicDropDowns.cy.js                                |
| ⚠️ **Alerts & Popups**       | 11 - JavaScript Alerts                                                       | 11_TC_Alerts.cy.js                                          |
|                             | 12 - JavaScript Confirm Alerts                                              | 12_TC_JavaScriptConfirmAlerts.cy.js                         |
|                             | 13 - JavaScript Prompt Alerts                                               | 13_TC_JavascriptPromptAlert.cy.js                           |
|                             | 14 - Authenticated Alert (Basic Auth)                                        | 14_TC_AuthenticatedAlert.cy.js                              |
| 🔗 **Windows, Tabs & Frames**| 15 - Handling Child Tabs                                                     | 15_TC_ChildTabs.cy.js                                       |
|                             | 16 - Handling iFrames                                                        | 16_TC_iFrames.cy.js                                         |
| 🗂️ **Tables & Data Extraction**| 17 - Working with Tables                                                   | 17-TC_Tables.cy.js                                          |
|                             | 18 - Count Rows & Columns in a Table                                        | 18_TC_Tables_CalculateTotalNumberOfRowsColumns.cy.js        |
|                             | 19 - Get Data from a Specific Table Cell                                    | 19_TC_Tables_CheckDataFromSpecificCell.cy.js                |
|                             | 20 - Read and Extract Table Data                                            | 20_TC_Tables_ReadDataInTable.cy.js                          |
| 🖱️ **Mouse & Keyboard Operations**| 21 - Mouse Operations (Click, Hover, etc.)                                | 21_TC_MouseOperations.cy.js                                 |
|                             | 22 - Mouse Hovering                                                          | 22_TC_MouseOperationHoveringMouse.cy.js                     |
|                             | 23 - Right Click (Context Menu)                                              | 23_TC_RightClick.cy.js                                      |
|                             | 24 - Double Click Action                                                    | 24_TC_DoubleClick.cy.js                                     |
|                             | 25 - Scrolling Page                                                          | 25_TC_ScrollingPage.cy.js                                   |
|                             | 26 - Drag and Drop                                                          | 26_TC_DragAndDrop.cy.js                                     |
| 📂 **File Uploads & Handling**| 27 - Single File Upload                                                     | 27_SingleFileUpload.cy.js                                   |
|                             | 28 - File Upload & Rename                                                   | 28_TC_FileUploadAndRenameFile.cy.js                         |
|                             | 29 - Upload File via Drag and Drop                                          | 29_TC_UploadFileByDragAndDrop.cy.js                         |
|                             | 30 - Upload Multiple Files                                                  | 30_TC_UploadMultiplesFiles.cy.js                             |
|                             | 31 - Upload File in Shadow DOM                                              | 31_Tc_UploadFileShadowDOM.cy.js                             |
| 📄 **Data Handling & Customization**| 32 - Using Fixtures for Test Data                                         | 32_TC_Fixture.cy.js                                         |
|                             | 33 - Data-Driven Testing for Login                                           | 33_TC_DataDrivenTesting_Login.cy.js                         |
|                             | 34 - Custom Cypress Commands                                                 | 34_TC_CustomCommands.cy.js                                  |
| 🌍 **Browser & Navigation Handling**| 35 - Browser Navigation (Back/Forward)                                   | 35_TC_BrowserNavigation.cy.js                               |
|                             | 36 - Taking Screenshots                                                     | 36_TC_Screenshots.cy.js                                     |
| 🏗️ **Page Object Model (POM) Implementation**| 37 - POM Without Fixtures                                      | 37_TC_POM_WithoutFixtures.cy.js                             |
|                             | 38 - POM with Fixtures (Data-Driven)                                        | 38_TC_POM_withFixture_DataDrivenTesting.cy.js               |
|                             | 39 - POM with Advanced Data-Driven Testing                                  | 39_TC_POM_Fixtures_DataDrive.cy.js                           |



---


---

## 🛠️ **Getting Started**

Follow these steps to set up and run the tests:

1. **Clone the Repository** 🖥️  
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies** 📦  
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:  
   ```bash
   npm install
   ```

3. **Run Cypress Tests** ▶️  
   Open the Cypress Test Runner with:  
   ```bash
   npx cypress open
   ```  
   Then select and run any test case from the Test Runner UI. 🏃‍♂️💨

---

## 🎯 **Purpose of This Repository**

This is **not a professional-level automation project**, but a learning resource aimed at **building strong basics** in Cypress.  
### Future Goals:  
- 🌟 Create end-to-end automation projects using the **Page Object Model (POM)**.  
- 🔧 Automate demo projects to enhance practical skills.  

**Remember:** Mastering the basics is the key to becoming an expert! 🧠💡

---

## 💡 **Why Use This Repository?**

- 🐣 **Beginner-Friendly**: Perfect for those just starting out.  
- 📝 **Well-Commented Code**: Each test case includes helpful explanations.  
- 📂 **Organized**: Test cases are written separately for easy understanding.  
- 🌍 **Practical Examples**: Covers real-world scenarios like alerts, forms, and data handling.  

---

## 🙌 **How to Contribute**

If you find any issues or have suggestions to improve this repository:  
1. ⭐ Star this repository!  
2. 🤝 Create a pull request or open an issue.  

Your contributions are always welcome! 🌟

---

## 💬 **Contact and Feedback**

Feel free to reach out if you have any questions or feedback!  
**Happy Testing!** 😊  

---

**🌟 Pro Tip:** Take it one step at a time, and don’t hesitate to experiment. Inshallah, this repository will help you and others build a strong foundation in Cypress. 🌟  

---
