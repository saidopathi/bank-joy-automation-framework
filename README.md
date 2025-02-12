# bank-joy-automation-framework

## 🚀 Overview
This project is an **API automation framework** for fetching and testing foreign exchange rates using the **Bank of Canada Valet API**.

## 📌 Prerequisites
Ensure the following software is installed on your machine:

- [**Node.js**](https://nodejs.org/en/) (Version 22 or higher)
- [**npm**](https://www.npmjs.com/) (comes bundled with Node.js)

To verify if Node.js and npm are installed, run the following commands in your terminal:

```bash
node -v
npm -v
```

### **If Node.js is not installed**, download and install it from the official website:
[Download Node.js](https://nodejs.org/en/)

## 🛠️ Setup & Installation

### **1. Clone the Repository**

1. Clone the repository to your local machine:

```bash
git clone <https://github.com/saidopathi/bank-joy-automation-framework.git>
cd bank-joy-automation-framework
```

### **2. Install Dependencies**

2. Install all project dependencies:

```bash
npm install
```

This will install the following:
- **Supertest** (for making API requests)
- **Jest** (for running tests)
- **jest-html-reporters** (for generating HTML test reports)

## 📊 Running the Tests

### **3. Execute Tests**

3. To run the tests, use the following command:

```bash
npm test
```

This will execute the API tests, including positive and negative scenarios for currency pairs (e.g., **CAD to USD**, ). The results will be printed in the terminal.

### **4. Viewing the HTML Test Report**

4. Once the tests are completed, an **HTML report** will be generated in the `reports` directory.

Open the generated HTML report in a browser:

```
reports/report.html
```

This report will contain a detailed view of the test execution, including success and failure counts.

## 🧪 Test Cases Covered

### **Positive Test Cases:**
- Fetch **CAD to USD** exchange rates for the last 10 weeks.

### **Negative Test Cases:**
- Handle **incorrect API endpoint** gracefully (404 error).
- Handle **request with invalid currency pair** gracefully (404 error).
- Handle **request with invalid parameter values** gracefully (400 error).


---

