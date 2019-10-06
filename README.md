![REPO SIZE](https://img.shields.io/github/repo-size/ayriela/jquery-salary-calculator.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/ayriela/jquery-salary-calculator.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/ayriela/jquery-salary-calculator.svg?style=social)
# Salary Calculator 

- Add `Salary Calculator` page header 
    - Format so that the text is centered and header banner has distinct background color
- [] add `Add an Employee` header above inputs 
    -  Accept user input for `First Name`, `Last Name`, `ID`, `Title`, `Annual Salary`  
    - Add a `Submit` button to store the id and salary to an array and update the table display
- add ‘Employees’ header above the table display
- add table with headers `First Name`, `Last Name`, `ID`, `Title`,`Annual Salary` and an additional blank column 
    - add test entry hardcoded in table via html
    - add a delete button to hardcoded entry
        - use event listener with descendent selector to set up click action on all delete buttons
        - delete action will call deleteRow function 
    - add table footer of single color (no divisions)
- at bottom of page add `Total Monthly:`
    - Calculate this value as a sum of the salaries divided by 12  

## General Formatting rules: 
    - Border the whole page  
    - Center the whole page 
    - Use rounded buttons 
    - Format table so header and row items are distinct, and there are divisions between columns
    - Table values are left aligned but salary is right aligned
    - Delete buttons are centered in column
    - border in and around table


## Description
Duration: Weekend Project 

This Salary Caluclator allows users to enter new employee records to the page and calculate the monnthly expected salary cost. If needed users may delete employee records and update the monthly salary expenses. 

## Screen Shot

## Installation 

Install this project by forking and cloning this github repository to local file system.

## Usage
- if user enters employees whose total monthly salaries will be more than $20,000 the background of total monthly becomes red
## Built With

- javascript 
- jQuery

## Roadmap
- Add check to make sure employee ids being added are unique and alert user if the id is already taken
- Add format check to make sure value entered in the annual salary input is a number
- Add auto formatting to table entries to correct the name or job title capitalization from user entered
- Not designed for large employee sets as written. To account for this:
    - add ability to import a full employee list
    - add ability for user to configure expense threshold below or above $20,000
    - adjust total calculation so running total is stored and delete simply subtracts new value or appends new value on delete or add employee action

## Acknowledgement
Thanks to Prime Digital Academy
