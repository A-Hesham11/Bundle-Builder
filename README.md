# Bundle Builder

A responsive bundle builder application built with React, TypeScript, Vite, Tailwind CSS, and Zustand.

Users can build a custom security system by selecting products, variants, and quantities, then review the final bundle before checkout.

## Live Demo

[View Live Project](https://bundle-builder-tawny.vercel.app/)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Lucide React
- ESLint

## Features

- Step-based bundle builder flow
- Product selection by category
- Product variants
- Quantity controls
- Live review panel
- Dynamic subtotal and compare-at total
- Save system for later
- Saved system hydration
- Responsive layout
- Clean separation between UI and business logic

## Project Structure

```txt
src
├── app
│   ├── constants
│   ├── routes
│   └── types
│
├── assets
│
├── components
│   ├── shared
│   └── ui
│
├── modules
│   └── BundleBuilder
│       ├── components
│       ├── hooks
│       ├── utils
│       ├── constants.ts
│       └── types.ts
│
├── pages
│   └── BundleBuilderPage
│
├── store
│   └── useBundleStore.ts
│
├── utils
│
├── App.tsx
├── index.css
└── main.tsx
```

## Project Structure Explanation

The project is organized to separate each responsibility into its own place.

This makes the code easier to read, maintain, and scale if the project grows later.

### `pages`

The `pages` folder contains the main pages of the project.

Each page is responsible for rendering a screen and composing the needed modules.

For example, `BundleBuilderPage` renders the bundle builder screen.

The page does not contain complex business logic. It connects the page layout with the related feature.

### `components`

The `components` folder contains reusable components used across the project.

It is split into two parts:

```txt
components
├── shared
└── ui
```

### `components/ui`

The `ui` folder contains small generic UI components.

Examples:

- Button
- Price
- QuantityStepper

These components are reusable and do not contain business logic.

### `components/shared`

The `shared` folder contains reusable components that can be used in different places.

Examples:

- ProductCard
- ProductBadge
- ProductVariantSelector

The goal is to keep common UI pieces reusable instead of repeating the same code in multiple places.

### `store`

The `store` folder contains the global state of the app.

I used Zustand because the bundle builder has shared data used by multiple components.

Examples:

- Current open step
- Selected product quantities
- Active product variants
- Saved system data

Using a store keeps this data in one place and avoids passing props through many component levels.

It also makes the project ready for more business logic if the app grows later.

### `modules`

The `modules` folder contains feature-specific code.

Each feature can have its own module.

In this project, the main module is `BundleBuilder`.

```txt
modules
└── BundleBuilder
    ├── components
    ├── hooks
    ├── utils
    ├── constants.ts
    └── types.ts
```

Everything related to the bundle builder feature stays inside this folder.

This makes the feature easier to understand, change, and extend.

### `modules/BundleBuilder/components`

This folder contains components used only inside the Bundle Builder feature.

Examples:

- BuilderAccordion
- BuilderStep
- ReviewPanel
- ReviewLineItem

These components focus mainly on rendering the UI for this feature.

### `modules/BundleBuilder/hooks`

This folder contains custom hooks for the Bundle Builder logic.

I used hooks to separate logic from UI.

For example:

- `BuilderStep.tsx` renders the step UI.
- `useBuilderStep.ts` handles the step logic.

`useBuilderStep.ts` is responsible for things like:

- Checking if the step is open
- Counting selected products
- Opening a step
- Moving to the next step

This keeps the UI components clean and easier to read.

### `modules/BundleBuilder/utils`

This folder contains helper functions related to the Bundle Builder feature.

Examples:

- Calculating subtotal
- Calculating compare-at total
- Preparing selected items
- Handling product quantity keys

These functions are kept outside the components so the logic is easier to reuse and maintain.

### `modules/BundleBuilder/types.ts`

This file contains types related to the Bundle Builder feature.

Keeping feature types close to the feature makes the code easier to navigate.

### `modules/BundleBuilder/constants.ts`

This file contains constants related to the Bundle Builder feature.

This keeps static feature data in one clear place.

### `app`

The `app` folder contains app-level files shared across the whole project.

It can include:

- Global constants
- Routes
- Shared types

These files are not specific to one feature.

### `assets`

The `assets` folder contains static files used in the UI.

Examples:

- Images
- Icons
- Illustrations

### `utils`

The `utils` folder contains global helper functions used across the project.

Examples:

- Class name merging
- Formatting helpers
- Shared key helpers

These utilities are not tied to one specific feature.

## Architecture Decisions

The project follows a feature-based architecture.

The main idea is to keep each part of the app responsible for one clear thing.

- `pages` compose screens.
- `components/ui` contains generic UI components.
- `components/shared` contains reusable shared components.
- `modules` contains feature-specific code.
- `hooks` contain reusable logic.
- `utils` contain helper functions.
- `store` contains shared application state.

This structure keeps the project ready for future business requirements.

## State Management

The project uses Zustand for state management.

The bundle builder needs shared state between the builder steps and the review panel.

The store manages:

- `openStepId`
- `quantities`
- `activeVariants`
- `setOpenStep`
- `setActiveVariant`
- `increment`
- `decrement`
- `saveSystem`
- `hydrateSavedSystem`

Zustand keeps the state simple without extra boilerplate.

It also avoids prop drilling and keeps the app easier to scale.

## UI and Logic Separation

UI and business logic are separated using custom hooks and utility functions.

For example:

```txt
BuilderStep.tsx
useBuilderStep.ts
```

`BuilderStep.tsx` focuses on rendering.

`useBuilderStep.ts` handles the logic.

Another example:

```txt
ProductCard.tsx
useProductCard.ts
productCardUtils.ts
```

`ProductCard.tsx` renders the product card.

`useProductCard.ts` handles product state and actions.

`productCardUtils.ts` contains pure helper functions for product logic.

This keeps components smaller, cleaner, and easier to maintain.

## Deployment

The project is deployed on Vercel.

[https://bundle-builder-tawny.vercel.app/](https://bundle-builder-tawny.vercel.app/)
