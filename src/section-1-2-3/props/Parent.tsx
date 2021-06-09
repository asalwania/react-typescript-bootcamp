import { Child } from "./Child";

const Parent = () => {
  return <Child color="gray" onClick={()=> console.log('clicked')} />;
};

export default Parent;
