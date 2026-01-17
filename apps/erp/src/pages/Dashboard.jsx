export default function Dashboard() {
  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p className="muted">Track KPIs and module status at a glance.</p>
      <div className="panel-grid">
        <article className="panel">
          <h3>Workflows</h3>
          <p>3 workflows running</p>
        </article>
        <article className="panel">
          <h3>Inventory</h3>
          <p>120 items synced</p>
        </article>
        <article className="panel">
          <h3>Finance</h3>
          <p>Monthly close in 4 days</p>
        </article>
      </div>
    </section>
  );
}
