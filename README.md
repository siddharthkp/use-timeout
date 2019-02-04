<p align="center">
  <img src="https://pbs.twimg.com/media/DyKPpD7UwAAVKyH.jpg:large" height="200px"/>
  <br><br>
  <b>Declarative React hook for setTimeout</b>
  <br><br/>
  <a href="https://codesandbox.io/s/vqxwwyolxy">Demo on CodeSandbox</a>
</p>

&nbsp;

Declarative adaptation of `setTimeout` based on [Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) about `setInterval`

#### install

```
npm install use-timeout
```

&nbsp;

#### usage

```js
import useTimeout from 'use-timeout'

function SimpleExample() {
  const [message, setMessage] = useState('changing in 2 seconds...')

  useTimeout(() => setMessage('changed!'), 2000)

  return <div>{message}</div>
}
```

&nbsp;

#### but why?

Long answer long: [overreacted.io/making-setinterval-declarative-with-react-hooks/](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
