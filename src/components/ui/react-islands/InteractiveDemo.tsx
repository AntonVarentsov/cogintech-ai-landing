import * as React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const InteractiveDemo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert(`Hello, ${name || 'Anonymous'}! Count: ${count}`);
  };

  return (
    <div className="space-y-4 p-6 border rounded-lg bg-card">
      <h3 className="text-lg font-semibold">Interactive React Island Demo</h3>
      
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Your Name:</label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          onClick={() => setCount(c => c - 1)}
        >
          -
        </Button>
        <span className="text-2xl font-bold min-w-[3ch] text-center">{count}</span>
        <Button 
          variant="outline" 
          onClick={() => setCount(c => c + 1)}
        >
          +
        </Button>
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={handleSubmit}
          loading={loading}
        >
          Submit
        </Button>
        <Button 
          variant="secondary"
          onClick={() => {
            setCount(0);
            setName("");
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};