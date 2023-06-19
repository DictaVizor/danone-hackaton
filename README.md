
# Danone Hackaton

Project was built within a 2 sessions of 8 hours each during Danone Hackaton 2023.

## <div align="center"><a href="https://danone-hackaton-8ypklcv2g-dictavizor.vercel.app">View site</a></div>



## Objectives

* **Home page:** view showing an introduction to the application.
* **Daily calorie settings page:** view where users can set their maximum daily calorie limit. This could include a form or input field where they can enter the amount of calories they wish to consume as a maximum in a day.
* **Product page:** catalogue listing Danone's eco range products.
* **Product details page:** View showing details about the product. For example: energy value, fat and carbohydrates. Indicate if it comes from organic farming and its ingredients.
* **Search bar:** Add a search bar to allow users to search for specific products within the catalogue.
* **User profile page:** Create a view where users can access their profile and see their maximum daily calorie limit, as well as their interest in products with a lower environmental footprint. They may also have the option to modify these parameters if they wish.



## Tech Stack

**Client:** React, NextJS 13, Typescript, Zustand (state management), Tailwind CSS, Apollo Client, Daisy UI (Tailwind plugin), Atomic desing (component folder structure)

**Server:** Hygraph (headless cms with graphql api)


## Installation

Install dependencies using:  
No dev variables are needed.

```bash
  npm install
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/DictaVizor/danone-hackaton
```

Go to the project directory

```bash
  cd danone-hackaton
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Decision making

I first told myself I was only going to spend 16 hours to make this project, 8 hours on saturday and 8 on sunday. I was able to stick to my times.

The very first decision was wether to do my own desing or follow provided assets. UI/UX design takes a lot of time and time is what I did not have, so this decision was easy: **use provided assets**. 

Second decision was which headless CMS to use, making a custom simple CMS was also an option, but that requires a lot of time, so the decision was left to which. I had never tried a headless CMS before, so I tried contentful and hygraph, but hygraph documentation seemed cleaner so I wen for **hygraph**.

Third decision was schema. Product schemas are not as straight forward as they might see, products might have a lot of metadata like tags, categories, nested categories, etc. The scope of this hackaton was very simple, so I decided to go for a very simple schema as well, using references from figma examples. The final schema look like this (typescript):

```typescript
Product = {
    name: string
    description: string
    nutriScore: NutriScore
    ingredients: string
    details: string
    weight: number
    calories: number
    fat: number
    carbs: number
    ean: number
    ecologicalFootprint: number
    co2: number
    carbonFootprint: number
    image: {
        url: string
    }
    id: string
}
```

Fourth decision was how I was going to organize component folders, since those can become really messy really fast even for small projects. I've been using **atomic design** for the last 2 years, so that was a no brainer for me.

Fifth decision was which UI framework to use, I've been using Chakra UI for the last 2 years as well, and prior of that I was using Material UI. So the obvious decision was to use **Tailwind CSS**. Being serious here, I choosed Tailwind because hackatons also need to be fun, and trying new stuff is always fun, that's why I decided to use tailwind.

Sixth decision was which version of NextJS to use (I've been using NextJS for the past 5 years, and even though there are other frameworks like Gatsby, NextJS is still the most requested framework at jobs, that's why I'm not moving from NextJS), we were using NextJS 13 at my job, but with all the new routing disabled, the no brainer was to use a version that I'm familiar with, but I've looking to use new features for a long time now, and as I said, hackatons are about fun, so I went for **NextJS 13**.

Seventh decision was wether to use simple graphql request or apollo, **apollo** might be an overkill for the scope of this project, but again, NextJS 13, new stuff, apollo releasing beta utilities for new NextJS version, of course I went for the overkill just to try it.

Eight decision was wether or not to make the app responsive and make it mobile first, I limited myself to 16 hours, and If i'd decided to make it responsive I wouldn't had enough time to finish the project, so the final decision was to make the app **desktop only**. This is not ideal for real apps, but this is a hackaton, I had to make sacrifices :(.

Ninth decision and last before jumping to development, state management for the calorie form, those live in 2 pages and the calorie info can be used as a type of filter as shown in the examples, so of course I had to go for a state management like Redux, Zustand or Mobx. Decision was a no brainer, redux has a lot of boilerplate and even though there are tools and libraries to avoid that amount of boilerplate, Zustand is so easy and fast to use, and used in combination of immer the experience is very smooth. Final decision was **Zustand**.

Development process was really smooth, and sticking to given assets made it fairly simple as well. I could enter more details about decision making while developing layouts and how to divide pages into blocks, but those are usually very straight forward.

I came across some problems during development, these were specific for using NextJS 13 and not knowing how to properly handle some situations with server and client component and external libraries. I was able to fix some problems by just reading the typical NextJS that is very common now a days within a lot of libraries, but for one specific problem I had to look for github issues, this problem was with zustand and using the persist middleware that allows the store to persist between refreshes (for the calorie form), the fix was to just disable automatic hydration and manually hydrate the store after components are rendered (this was happening even for client components).

**TLDR**:
* Used provided assets instead of creating my own
* Headless CMS: hygraph
* Atomic design for components folder structure
* Tailwind CSS as my UI framework of choice
* NextJS 13 to play with new features that I hadn't used till now
* Apollo to overkill graphql
* Desktop only instead of mobile first responsive
* Zustand for state management
