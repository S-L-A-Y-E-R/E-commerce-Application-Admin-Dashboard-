# Project Title

Admin Dashboard

## Introduction

This is an admin dashboard related to an ecommerce store that allows the admin to add different products that is related to different
categories with variant sizes and colors, also allows him to show the total revenue of the sales for the whole products each month
thorough a nice graph.

### Technologies

[![My Skills](https://skillicons.dev/icons?i=tailwind,react,next,vercel)](https://skillicons.dev)

## Features:

-The app is using the following supporting packages to enhance the user experience:

* We will be using Shadcn UI for the Admin!
* admin dashboard is going to serve as both CMS, Admin and API!
* You will be able to create, update and delete categories!
* You will be able to create, update and delete products!
* You will be able to upload multiple images for products, and change them whenever you want!
* You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
* You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them * tandalone (Our Admin generates API for all of those cases!)
* You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
* You will be able to control which products are "featured" so they show on the homepage!
* You will be able to see your orders, sales, etc.
* You will be able to see graphs of your revenue etc.
* Clerk is used Authentication!
* Order creation
* Stripe checkout
* Stripe webhooks
* MySQL + Prisma + PostgerVercel

### Installing

Clone the repo and run this command in the terminal to install the dependecies:

```
npm install
```

Add these variables to your environment:

```
API_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

To run the project:

```
npm run dev
```

### Live demo

You can visit the website through [this link](https://e-commerce-application-admin-dashboard.vercel.app/)
