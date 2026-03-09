import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

const features = [
  {
    icon: "\u26A1",
    title: "Real-Time Metrics",
    desc: "Collect metrics every second from thousands of hosts. CPU, memory, disk, network, and custom metrics — all in one place with zero sampling.",
  },
  {
    icon: "\uD83D\uDD14",
    title: "Intelligent Alerting",
    desc: "ML-powered anomaly detection learns your baseline and alerts on deviations. Composite alerts, escalation policies, and on-call schedules built in.",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Custom Dashboards",
    desc: "Drag-and-drop dashboard builder with 30+ widget types. Line charts, heatmaps, topologies, log streams. Share with a link or embed anywhere.",
  },
  {
    icon: "\uD83D\uDD0C",
    title: "500+ Integrations",
    desc: "Native integrations for AWS, GCP, Azure, Kubernetes, Docker, Prometheus, Grafana, Datadog, PagerDuty, Slack, and hundreds more.",
  },
  {
    icon: "\uD83D\uDD0D",
    title: "Log Management",
    desc: "Centralized logging with full-text search, structured parsing, and correlation with metrics. Tail logs in real time or query petabytes in seconds.",
  },
  {
    icon: "\uD83C\uDF10",
    title: "Network Monitoring",
    desc: "Layer 3-7 visibility with flow analysis, packet inspection, and DNS monitoring. Map your entire network topology automatically.",
  },
  {
    icon: "\u2699\uFE0F",
    title: "APM & Tracing",
    desc: "Distributed tracing across microservices. Track requests from browser to database. Identify bottlenecks and latency spikes instantly.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "SLA & Reporting",
    desc: "Automated SLA tracking with burn-rate alerts. Generate compliance reports for SOC 2, ISO 27001, and custom frameworks.",
  },
  {
    icon: "\uD83D\uDD10",
    title: "REST API & CLI",
    desc: "Fully documented REST API with OpenAPI spec. CLI tool for scripting. Terraform provider for infrastructure-as-code monitoring.",
  },
];

const stacks = [
  {
    title: "Cloud Providers",
    desc: "AWS, Google Cloud, Microsoft Azure, DigitalOcean, Hetzner, OVHcloud, Scaleway. Native APIs, no proxies needed.",
  },
  {
    title: "Containers & Orchestration",
    desc: "Docker, Kubernetes, ECS, Nomad, OpenShift. Auto-discover pods, track resource requests vs usage, alert on crashes.",
  },
  {
    title: "Databases",
    desc: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, ClickHouse. Query performance, replication lag, connection pools.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Seo path="/features" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            Platform
          </span>
          <h1 className="text-5xl font-bold tracking-tight mt-4 mb-4">
            Powerful monitoring,
            <br />
            <span className="text-gradient">zero complexity</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
            One platform to monitor everything. From bare-metal servers to
            serverless functions, Superviz.io adapts to your stack.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <div className="w-12 h-12 bg-accent-subtle rounded-[10px] flex items-center justify-center text-2xl mb-5">
                  {f.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{f.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Works with <span className="text-gradient">your stack</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
              One lightweight agent covers everything. Auto-discovers services
              and starts collecting metrics in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stacks.map((s) => (
              <div
                key={s.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <h2 className="text-xl font-bold mb-3">{s.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Start monitoring <span className="text-gradient">in 5 minutes</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            Install the agent, see your metrics. No configuration needed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Start Free Trial &rarr;
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
