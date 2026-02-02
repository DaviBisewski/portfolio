export default function SectionTitle({ small, big }) {
  return (
    <div className="container mt-20">
      <p className="text-gray-400 uppercase tracking-widest text-sm reveal ">
        {small}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold reveal ">
        {big}
      </h2>
    </div>
  );
}
