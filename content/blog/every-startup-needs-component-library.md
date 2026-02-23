---
title: 'Why Every Startup Should Build a Component Library'
date: '2020-07-06'
excerpt: 'Over a year ago, I attended the NgVikings Conference and was particularly inspired by a talk on component libraries. Within minutes...'
readingTime: '5 min read'
coverImage: 'photo-1560961911-a21c4f35443f'
---

Over a year ago, I attended the NgVikings Conference and was particularly inspired by a [talk](https://www.youtube.com/watch?v=QtZMTRq9Ly4) on component libraries. Within minutes, I realized how transformative such a system could be for our team.

As a developer, I've always valued **reusability—crafting** code that's sustainable and adaptable across various implementations. Establishing a component library was a natural progression of this philosophy.

Initially, I was apprehensive. Our team was small, juggling multiple responsibilities, and dedicating time to develop a component library seemed daunting. We anticipated working on it during spare moments between tasks. Nevertheless, we decided to proceed. A year later, I can confidently say it was one of our best decisions.

![](https://media.giphy.com/media/BlVnrxJgTGsUw/source.gif)

Even if you're a small team or at an early project stage, I encourage you to take the plunge. The benefits are immediate: faster prototyping, isolated development, and an accelerated design and development process.

## Key Learnings

- **Start Simple**: Begin with basic components to lay the groundwork for more complex elements.
- **Establish Conventions**: Define processes early on—naming conventions, choice of CSS preprocessors, testing strategies, etc.—to streamline development.
- **Semantic Naming**: Use HTML tags as references to maintain semantic clarity in component names.
- **Prioritize Testing**: Aim for high test coverage; these components form the foundation of your product.
- **Iterative Development**: For complex components, start with a basic version and iterate to add functionality over time.
- **Invest in Documentation**: Comprehensive documentation is as crucial as testing; it supports scalability and team onboarding.
- **Leverage Existing Solutions**: Don't reinvent the wheel. Utilize existing components and extend them to suit your needs

## Tools and resources we found valuable

- [Storybook](https://storybook.js.org/)
- [@storybook/addon-docs](https://www.npmjs.com/package/@storybook/addon-docs)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Jest Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)
- [Cypress for E2E testing (using Storybook)](https://www.cypress.io/)

Embarking on the creation of a Design System or Component Library is a commitment that yields substantial rewards. I hope our experiences and insights assist you in your journey.