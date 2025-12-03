import { createFileRoute } from "@tanstack/react-router";

const Component = () => {
  return <div className="">regions</div>;
};

export const Route = createFileRoute("/regions")({
  component: Component,
});
