## Cannot use JSX unless the '--jsx' flag is provided

tsconfig.json  添加 `"jsx": "react",`

## 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

tsconfig.json  添加 `"jsx": "react-jsx"`

- https://stackoverflow.com/questions/64656055/react-refers-to-a-umd-global-but-the-current-file-is-a-module


## ERROR [ExceptionsHandler] Invalid hook call
```bash
[Nest] 997  - 12/28/2021, 11:25:10 PM   ERROR [ExceptionsHandler] Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
    at resolveDispatcher (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/client/node_modules/react/cjs/react.development.js:1476:13)
    at Object.useContext (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/client/node_modules/react/cjs/react.development.js:1484:20)
    at Html (webpack-internal:///../node_modules/.pnpm/registry.npmmirror.com+next@12.0.7_react-dom@17.0.2+react@17.0.2/node_modules/next/dist/pages/_document.js:153:73)
    at processChild (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/node_modules/.pnpm/registry.npmmirror.com+react-dom@17.0.2_react@17.0.2/node_modules/react-dom/cjs/react-dom-server.node.development.js:3353:14)
    at resolve (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/node_modules/.pnpm/registry.npmmirror.com+react-dom@17.0.2_react@17.0.2/node_modules/react-dom/cjs/react-dom-server.node.development.js:3270:5)
    at ReactDOMServerRenderer.render (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/node_modules/.pnpm/registry.npmmirror.com+react-dom@17.0.2_react@17.0.2/node_modules/react-dom/cjs/react-dom-server.node.development.js:3753:22)
    at ReactDOMServerRenderer.read (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/node_modules/.pnpm/registry.npmmirror.com+react-dom@17.0.2_react@17.0.2/node_modules/react-dom/cjs/react-dom-server.node.development.js:3690:29)
    at Object.renderToStaticMarkup (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/node_modules/.pnpm/registry.npmmirror.com+react-dom@17.0.2_react@17.0.2/node_modules/react-dom/cjs/react-dom-server.node.development.js:4314:27)
    at Object.renderToHTML (/Users/huixisheng/Coding/github.com/coding-explore/nest-next-demos/node_modules/.pnpm/registry.npmmirror.com+next@12.0.7_react-dom@17.0.2+react@17.0.2/node_modules/next/server/render.tsx:1338:35)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```