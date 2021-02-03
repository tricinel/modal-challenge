# 'Tis the Modal Challenge

![Build status][build-status-badge]

What if you had to build a modal component in React, you started with a blank page and you had very few constraints and assumptions, plus total freedom? Would that stop you? Would it give you wings? Or would it make your head explode?

It turns out the answer is quite a mixed bag...of tools! It was like Christmas as I got to use all of these, among others:

* [React](https://reactjs.org/)
* [Emotion](https://emotion.sh/)
* [Babel](https://babeljs.io/)
* [Storybook](https://storybook.js.org/)
* [Mdx](https://mdxjs.com/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [Husky](https://typicode.github.io/husky/#/)
* [Lint staged](https://github.com/okonet/lint-staged)
* [Precise commits](https://github.com/nrwl/precise-commits)
* [Prettier](https://prettier.io/)
* [TypesScript](https://www.typescriptlang.org/)
* [Axe](https://www.deque.com/axe/) (not the deodorant, although I used that as well)

It turns out there's a lot to consider when designing and developing a modal. Here are some of the questions I considered:

* How will you design the props interface?
* What will its API look like? How many sub-components?
* What's the correct markup for it?
* How are we going to handle focus?
* What about handling keyboard and mouse events?
* What are the accessibility requirements for a modal?
* How do we let others use it?
* How do we educate our fellow devs to use it?
* How are we going to introduce changes to the component?
* How are we going to test it and deploy it?
* What about documentation? Who is responsible for that and how do we write it?
* What goes in the modal? Forms, buttons, messages, text, icons, images? How are those designed? What does their API look like?
* How is the modal themed?
* How are styles managed? JavaScript? CSS Variables?
* Are the styles hard coded? What about letting other developers provide the styles? Should they be primitives, completely unstyled?
* What about letting non-developers style the components?
* What about different device widths, different browsers, different platforms? _Different planets_?
* Lest we forget, how are we going to name it?
* And how much coffee do you need to keep functioning through all this?

There's plenty of things to think about here. For one, this shit's hard! For two, it's really hard! Still, I enjoyed it quite a lot! I might build an accordion next. Who knows... ┐(ﾟ～ﾟ)┌

Head on over to the [Storybook page](https://modal-challenge.netlify.app/) where I have answers to some of these things.

[build-status-badge]: https://img.shields.io/circleci/build/github/tricinel/modal-challenge?label=circleci&style=flat-square
