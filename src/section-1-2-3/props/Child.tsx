interface ChildProps {
  color: string;
  onClick:()=>void;
}

export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div style={{ background: color }}>
      <h1>Hello world</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
