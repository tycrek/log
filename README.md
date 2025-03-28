<div align="center">

# log

[![JSR badge]][JSR link]

*my personal logging tool for Deno, Bun, and Node*

</div>

[JSR badge]: https://jsr.io/badges/@tycrek/log
[JSR link]: https://jsr.io/@tycrek/log

## Installation

```bash
# with Deno
deno install jsr:@tycrek/log

# with Bun
bunx jsr install @tycrek/log

# with Node
npx jsr install @tycrek/log
```

## Usage

```ts
import Log from '@tycrek/log';

const log = new Log({ prefix: 'my-app' })

log.debug('for the devs')
log.info('useful.')
log.success('amazing!!')
log.warn('not good...')
log.error('REALLY BAD')

```
