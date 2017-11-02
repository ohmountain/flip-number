# NumberFlip

## install
```shell
yarn add flip-number
```

## example
```javascript

import FlipNumber from 'flip-number';

<FlipNumber number={0} 
            height={32} 
            width={32} 
            duration={500} 
            style={{ color: 'red' }} 
            delay={10} 
            timingFunction={'linear'} />

```

## api

| prop           | desc                   | default        |
| :-:            | :-:                    | :-:            |
| number         | 正在显示的数字         | 0，可选值是0-9 |
| height         | 包裹数字div的高度      | 32             |
| width          | 包裹数字div的宽度      | 32             |
| duration       | 数字变化的动画时间(ms) | 500            |
| style          | 自定义样式             | {}             |
| delay          | 动画延迟时间(ms)       | 0              |
| timingFunction | 动画转场效果           | linear         |
