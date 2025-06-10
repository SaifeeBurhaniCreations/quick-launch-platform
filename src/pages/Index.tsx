
import { useState } from 'react';
import { DocLayout } from '@/components/DocLayout';
import { FeatureCard } from '@/components/FeatureCard';
import { CodeBlock } from '@/components/CodeBlock';
import {
  Globe, Server, GitBranch, LineChart, Shield,
  Award, MessageSquare, ArrowRightCircle,
  Layers, Database, GitPullRequest, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const navItems = [
  {
    title: "Introduction",
    href: "#overview",
  },
  {
    title: "Key Features",
    href: "#features",
  },
  {
    title: "Subdomain Structure",
    href: "#subdomains",
    items: [
      { title: "Unlimited Support", href: "#unlimited-support" },
      { title: "Wildcard DNS Setup", href: "#wildcard-dns" },
      { title: "HTTPS Support", href: "#https-support" },
    ],
  },
  {
    title: "Technical Stack",
    href: "#tech-stack",
  },
  {
    title: "Tooling Example",
    href: "#tooling",
    items: [
      { title: "Reverse Proxy", href: "#reverse-proxy" },
      { title: "Deployment Controller", href: "#deployment-controller" },
      { title: "Auto Scaling", href: "#auto-scaling" },
    ],
  },
  {
    title: "Trial Workflow",
    href: "#workflow",
  },
  {
    title: "Security & Isolation",
    href: "#security",
  },
  {
    title: "Future Possibilities",
    href: "#future",
  },
  {
    title: "Communication",
    href: "#communication",
  },
  {
    title: "Naming Suggestions",
    href: "#naming",
  },
  {
    title: "Summary",
    href: "#summary",
  },
];

const Index = () => {
  const [activeDnsTab, setActiveDnsTab] = useState("a-record");

  return (
    <DocLayout items={navItems}>
      <div className="space-y-8">
        {/* Hero section */}
        <div className="flex flex-col items-start gap-4 border-b border-border pb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sbc-100 text-sbc-700 dark:bg-sbc-950 dark:text-sbc-500">
            <Server className="h-6 w-6" />
          </div>
          <h1 id="overview" className="scroll-m-20 text-4xl font-bold tracking-tight">
            SBC Deploy – Internal Deployment Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Streamline and simplify client app deployment with SBC Deploy.
          </p>
        </div>

        {/* Overview section */}
        <div>
          <p className="leading-7">
            SBC Deploy is an internal platform designed to streamline and simplify client app deployment.
            It provides clients with a temporary live environment under the <code>sbc-deploy.com</code> domain
            to test their applications, communicate with the development team, and finalize hosting needs
            before migrating to their own custom domain or subscribing to a managed plan.
          </p>
        </div>

        {/* Features section */}
        <section id="features" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">🔧 Key Features</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <FeatureCard
              icon={<Globe className="h-5 w-5" />}
              title="Subdomain-based Deployments"
              description="Provide each client with their own unique subdomain for testing and preview."
            />
            <FeatureCard
              icon={<Server className="h-5 w-5" />}
              title="Centralized Proxy"
              description="Manage all traffic through a single entry point for efficient routing and monitoring."
            />
            <FeatureCard
              icon={<GitBranch className="h-5 w-5" />}
              title="Managed DevOps"
              description="Comprehensive CI/CD pipeline with monitoring and auto-scaling features."
            />
            <FeatureCard
              icon={<Clock className="h-5 w-5" />}
              title="Temporary Live Hosting"
              description="One-month trial period under sbc-deploy.com domain for client testing."
            />
            <FeatureCard
              icon={<ArrowRightCircle className="h-5 w-5" />}
              title="Migration Options"
              description="Seamlessly transition to custom domains or managed hosting plans after trial."
            />
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Enhanced Security"
              description="All deployments are isolated with HTTPS enforcement and proper secret management."
            />
          </div>
        </section>

        {/* Subdomain Structure */}
        <section id="subdomains" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">🌐 Subdomain Structure</h2>

          <div id="unlimited-support" className="scroll-m-20 mt-6">
            <h3 className="text-2xl font-semibold tracking-tight">Unlimited Subdomain Support</h3>
            <p>You can generate unlimited subdomains like:</p>
            <ul className="my-4 ml-6 list-disc">
              <li><code>client1.sbc-deploy.com</code></li>
              <li><code>staging.client2.sbc-deploy.com</code></li>
              <li><code>demo-erp.sbc-deploy.com</code></li>
            </ul>
          </div>

          <div id="wildcard-dns" className="scroll-m-20 mt-6">
            <h3 className="text-2xl font-semibold tracking-tight">Wildcard DNS Setup</h3>
            <p>To support unlimited subdomains:</p>

            <Tabs value={activeDnsTab} onValueChange={setActiveDnsTab} className="mt-4">
              <TabsList>
                <TabsTrigger value="a-record">A Record</TabsTrigger>
                <TabsTrigger value="cname-record">CNAME Record</TabsTrigger>
              </TabsList>
              <TabsContent value="a-record">
                <Card>
                  <CardContent className="pt-6">
                    <CodeBlock>
                      {`Type: A
                        Host: *.sbc-deploy.com
                        Value: 123.123.123.123 (Server IP)`}
                    </CodeBlock>
                  </CardContent>
                </Card>

              </TabsContent>
              <TabsContent value="cname-record">
                <Card>
                  <CardContent className="pt-6">
                    <CodeBlock>
                      {`Type: CNAME
                        Host: *.sbc-deploy.com
                        Value: sbc-deploy.com`}
                    </CodeBlock>
                  </CardContent>
                </Card>

              </TabsContent>
            </Tabs>
          </div>

          <div id="https-support" className="scroll-m-20 mt-6">
            <h3 className="text-2xl font-semibold tracking-tight">HTTPS Support</h3>
            <ul className="my-4 ml-6 list-disc">
              <li>Use <strong>Wildcard SSL certificate</strong> (<code>*.sbc-deploy.com</code>), or</li>
              <li>Use <strong>Let's Encrypt</strong> with automated DNS challenge for each subdomain</li>
            </ul>
          </div>
        </section>

        {/* Technical Stack */}
        <section id="tech-stack" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">⚙️ Technical Stack (Suggested)</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-sbc-600" />
                    <h4 className="font-medium">Reverse Proxy</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Nginx or Traefik</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-sbc-600" />
                    <h4 className="font-medium">App Hosting</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Docker + PM2 or Node.js native server</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="h-5 w-5 text-sbc-600" />
                    <h4 className="font-medium">CI/CD Pipeline</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">GitHub Actions / GitLab CI</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-sbc-600" />
                    <h4 className="font-medium">Monitoring</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Uptime Kuma / Grafana + Prometheus</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-sbc-600" />
                    <h4 className="font-medium">Infrastructure</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">VPS or cloud provider (DigitalOcean, Hetzner, AWS, etc.)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tooling Example */}
        <section id="tooling" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">📦 Tooling Example</h2>

          <div id="reverse-proxy" className="scroll-m-20 mt-6">
            <h3 className="text-2xl font-semibold tracking-tight">1. Centralized Reverse Proxy</h3>
            <p>Handles routing:</p>
            <ul className="my-4 ml-6 list-disc">
              <li>All subdomains point to the proxy</li>
              <li>Proxy forwards traffic to container or internal app based on subdomain</li>
            </ul>
          </div>

          <div id="deployment-controller" className="scroll-m-20 mt-6">
            <h3 className="text-2xl font-semibold tracking-tight">2. Deployment Controller</h3>
            <p>Script or UI to:</p>
            <ul className="my-4 ml-6 list-disc">
              <li>Create containers or apps</li>
              <li>Assign subdomains</li>
              <li>Setup SSL</li>
              <li>Start monitoring</li>
            </ul>
          </div>

          <div id="auto-scaling" className="scroll-m-20 mt-6">
            <h3 className="text-2xl font-semibold tracking-tight">3. Auto Scaling (Optional Phase 2)</h3>
            <ul className="my-4 ml-6 list-disc">
              <li>Track traffic, CPU, memory</li>
              <li>Trigger scale-up/down events</li>
            </ul>
          </div>
        </section>

        {/* Trial Workflow */}
        <section id="workflow" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">📅 Trial Workflow (Client Perspective)</h2>
          <ol className="my-6 ml-6 list-decimal">
            <li>Client signs up for initial deployment</li>
            <li>App is deployed under <code>client-name.sbc-deploy.com</code></li>
            <li>SBC manages hosting, CI/CD, scaling for 1 month</li>
            <li>Client gives feedback and works with team</li>
            <li>After trial:
              <ul className="my-2 ml-6 list-disc">
                <li>Migrate to their own domain</li>
                <li>Or subscribe to SBC's managed hosting plan</li>
              </ul>
            </li>
          </ol>

          <div className="rounded-lg border bg-card p-6 mt-6">
            <h4 className="text-lg font-semibold mb-2">Trial Process Flowchart</h4>
            <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
                <div className="h-12 w-12 rounded-full bg-sbc-100 text-sbc-700 flex items-center justify-center mb-2">1</div>
                <p className="text-sm">Client Signup</p>
              </div>
              <ArrowRightCircle className="hidden md:block h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
                <div className="h-12 w-12 rounded-full bg-sbc-100 text-sbc-700 flex items-center justify-center mb-2">2</div>
                <p className="text-sm">Initial Deployment</p>
              </div>
              <ArrowRightCircle className="hidden md:block h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
                <div className="h-12 w-12 rounded-full bg-sbc-100 text-sbc-700 flex items-center justify-center mb-2">3</div>
                <p className="text-sm">Management & Feedback</p>
              </div>
              <ArrowRightCircle className="hidden md:block h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
                <div className="h-12 w-12 rounded-full bg-sbc-100 text-sbc-700 flex items-center justify-center mb-2">4</div>
                <p className="text-sm">Migration/Subscription</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Isolation */}
        <section id="security" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">🔐 Security & Isolation</h2>
          <ul className="my-6 ml-6 list-disc">
            <li>All deployments are sandboxed (Docker, separate environments)</li>
            <li>HTTPS enforced</li>
            <li>API secrets stored per client</li>
            <li>Optional Basic Auth for staging environments</li>
          </ul>
        </section>

        {/* Future Possibilities */}
        <section id="future" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">📈 Future Possibilities</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-sbc-600" />
                  <h4 className="font-medium">Client Dashboard</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Logs, usage data, and status monitoring</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-sbc-600" />
                  <h4 className="font-medium">Auto SSL + Deploy</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Automatic SSL certificates and GitHub deployment</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-sbc-600" />
                  <h4 className="font-medium">White-labeled Platform</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Customizable branding for SBC Deploy</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-sbc-600" />
                  <h4 className="font-medium">Developer Portal</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Metrics, alerts, and developer tools</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Communication & Support */}
        <section id="communication" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">📞 Communication & Support</h2>
          <ul className="my-6 ml-6 list-disc">
            <li>Clients can request changes, scaling, or custom features during the trial</li>
            <li>Slack / Telegram / Email integration for live feedback loop</li>
          </ul>
          <Card>
            <CardContent className="pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-sbc-600" />
                <h4 className="font-medium">Communication Channels</h4>
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <div className="bg-blue-100 rounded p-2">
                    <Slack className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Slack</span>
                </div>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <div className="bg-blue-100 rounded p-2">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Telegram</span>
                </div>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <div className="bg-blue-100 rounded p-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Email</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Naming Suggestions */}
        <section id="naming" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">📘 Naming Suggestions</h2>
          <ul className="my-6 ml-6 list-disc">
            <li><code>sbc-deploy.com</code> is good for MVP</li>
            <li>Consider renaming for productization (e.g., <code>LaunchPilot</code>, <code>QuickDeploy</code>, <code>AppNest</code>, etc.)</li>
          </ul>
        </section>

        {/* Summary */}
        <section id="summary" className="scroll-m-20">
          <h2 className="text-3xl font-bold tracking-tight">✅ Summary</h2>
          <div className="rounded-lg border bg-card p-6 mt-6">
            <p>
              SBC Deploy bridges the gap between development and production by offering a zero-hassle,
              short-term managed deployment solution. It's ideal for onboarding clients, showcasing MVPs,
              or providing proof-of-concept apps under a structured and scalable system.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Button className="bg-sbc-700 hover:bg-sbc-800 text-white">
              Get Started with SBC Deploy
            </Button>
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

// Additional icons needed
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function Slack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  );
}

function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default Index;
