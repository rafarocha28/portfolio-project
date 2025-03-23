export default function Experience() {
  return (
    <div
      className="flex flex-col sm:flex-row lg:flex-col items-center 
      justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl"
    >
      <Item main="14" label="years of experience" />
    </div>
  );
}

function Item(props: { main: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-blue-500 text-3xl font-bold leading-6">
        {props.main}
      </span>
      <span className="text-zinc-400 text-sm text-center">{props.label}</span>
    </div>
  );
}
