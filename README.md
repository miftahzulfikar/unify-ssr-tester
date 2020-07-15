Check your unify component SSR compability

## Install your unify local package

- in your unify package dir:

```
> yarn build
> yarn pack
> cp ./[generated-pack].tgz ~
```

- in this project dir:

```
> yarn add ~/[generated-pack].tgz
```

## Test your unify component

- create story file on `pages/stories/[package]/[story-name].js
- run `yarn dev`
- open `localhost:3000/stories/[package]/[story-name]`
- if there is no error, your component is ssr ready
