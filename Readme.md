# Muum Shared Library

A collection of reusable React Components, hooks, utils and helpers that I use in my private/public projects. Here you can find the storybook that shows them all. They are built with TypeScript and Tailwind CSS, designed to streamline your development workflow.

## Components

- **Button**
- **Input**
- **Checkbox**
- **Divider**
- **Icon**
- **Image**
- **Label**
- **Link**
- **Loader**
- **RadioButton**
- **Text**
- **ToggleSwitch**
- **Tooltip**

## Prerequisites

Before using the components, ensure you have the following installed:

- **Node.js**: v14.x or later
- **npm**: v6.x or later

## Required Packages

The following npm packages are required to use this component library:

- **React**: `^17.0.0` or later
- **React DOM**: `^17.0.0` or later
- **TypeScript**: `^4.0.0` or later
- **Tailwind CSS**: `^3.0.0` or later
- **classnames**: `^2.3.1` - Utility for conditionally joining class names
- **Tabler Icons React**: `^1.0.0` - Icon library used for the Icon component
- **React Intersection Observer**: `^9.0.0` - For lazy loading images

### Installing Packages

![alt text](https://storybook.js.org/tutorials/design-systems-for-developers/design-system-propagation.png)

This repo can be used as a central component system that can be imported by more than one project at the same time. The developers in different teams can create tests, stories and update this repo.

Write the following command to the terminal while you are at the root of the project

`git submodule add https://github.com/alimuratumutlu/muum-library shared`


Run the following command to install the required packages:

```bash
npm install tailwindcss classnames @tabler/icons-react react-intersection-observer
```
