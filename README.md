# generator-loc [![Build Status](https://secure.travis-ci.org/renowan/generator-loc.png?branch=master)](https://travis-ci.org/renowan/generator-loc)

> [Yeoman](http://yeoman.io) generator


```bash
npm install -g yo
```

### Loc用 Generator

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-loc from npm, run:

```bash
npm install -g git://github.com/renowan/generator-loc.git
```

Appの生成、必要ないので実装していない:

```bash
yo loc
```

### View生成

HTML body全体を操るView
第二引数「dir」は生成されるディレクトリ指定。省略可。

```bash
yo loc:bodyView {viewName} {dir}
```

インスタンス化されたView。
第二引数「dir」は生成されるディレクトリ指定。省略可。

```bash
yo loc:elementView {viewName} {dir}
```

### templateView 生成

```bash
yo loc:temp {viewName} {dir}
```

### Pageと基本構成の生成

HTML、View、Sass、Gulp一式

```bash
yo loc:page {pageName}
```

## License

MIT
