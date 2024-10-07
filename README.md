# UI Garden

This is a UI component library/toolkit built with React and Storybook. 

## Components Included
- Button
- Label
- Text
- Table
- Table Header
- Table Row
- Table Cell
- Table Footer
- Dropdown
- Radio Button
- Image
- Hero Image
- Card

## Getting Started

### Prerequisites

- Docker installed on your machine.

### Building the Docker Image

Navigate to the root directory of the project where the `Dockerfile` is located and run:

```bash
docker build -t stuchbery_finn_ui_garden .

``` 
###  this is running the docker build 
Navigate to the root directory of the project where the `Dockerfile` is located and run:

```bash
docker run -d -p 8083:80 --name Stuchbery_Finn_ui_garden stuchbery_finn_ui_garden
```