import React, { useState } from 'react';
function Button() {
const [count, setCount] = useState(0);
const increment = () => {
setCount(count + 1);
};
const decrement = () => {
setCount(count - 1);
};
return (
<div>
<p>Counter: {count}</p>
<button className="fail" onClick={increment}>Increase</button>
<button className="pass" onClick={decrement}>Decrease</button>
</div>
);
}
export default Button;
