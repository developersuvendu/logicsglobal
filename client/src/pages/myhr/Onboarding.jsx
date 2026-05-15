import {
  CheckCircle2,
  Circle,
  Clock,
  FileSignature,
  Laptop,
  Users,
  GraduationCap,
  KeyRound,
  ClipboardList,
} from "lucide-react";
import './styles/Onboarding.css';
import { CustomButton } from '../../components/common/CustomButton';
const steps = [
  {
    icon: FileSignature,
    title: "Personal Information",
    desc: "Submit personal details and emergency contacts",
    status: "complete",
    date: "Completed on 02 Jan 2026",
  },
  {
    icon: ClipboardList,
    title: "Document Verification",
    desc: "Upload and verify identity & education documents",
    status: "complete",
    date: "Completed on 05 Jan 2026",
  },
  {
    icon: KeyRound,
    title: "System Access Setup",
    desc: "Email, VPN, and tool access provisioning",
    status: "complete",
    date: "Completed on 08 Jan 2026",
  },
  {
    icon: Laptop,
    title: "Equipment Allocation",
    desc: "Laptop, accessories, and ID card collection",
    status: "in-progress",
    date: "Pickup scheduled · 06 May 2026",
  },
  {
    icon: Users,
    title: "Team Introduction",
    desc: "Meet your team, manager and HR buddy",
    status: "pending",
    date: "Awaiting schedule",
  },
  {
    icon: GraduationCap,
    title: "Orientation Training",
    desc: "Company policies, culture, tools & compliance",
    status: "pending",
    date: "Awaiting schedule",
  },
];

const statusMeta = {
  complete: { Icon: CheckCircle2, badge: "bg-success-soft", label: "Completed" },
  "in-progress": { Icon: Clock, badge: "bg-warning-soft", label: "In Progress" },
  pending: { Icon: Circle, badge: "bg-muted-soft", label: "Pending" },
};


const Onboarding = () => {
  const completed = steps.filter((s) => s.status === "complete").length;
  const progress = Math.round((completed / steps.length) * 100);
  return (
    <div className="space-y-6">
      <div className="p-6 shadow-sm bg-gradient-to-br from-primary-soft to-card border-primary/10">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold">Welcome aboard, Suvendu! 👋</h2>
            <p className="text-muted-foreground mt-1">
              Complete your onboarding journey to get fully set up.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{progress}%</div>
            <div className="text-xs text-muted-foreground">{completed} of {steps.length} steps</div>
          </div>
        </div>
        {/* <Progress value={progress} className="mt-4 h-2" /> */}
        <div>
          <div>{progress}</div>
        </div>
      </div>

      <div className="shadow-sm">
        <div className="p-5 border-b border-border">
          <h2 className="font-semibold text-lg">Onboarding Checklist</h2>
          <p className="text-sm text-muted-foreground">Your guided steps to a great start</p>
        </div>

        <div className="p-6">
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-5">
              {steps.map((s, i) => {
                const meta = statusMeta[s.status];
                return (
                  <div key={i} className="relative flex gap-4">
                    <div className={`relative z-10 h-14 w-14 shrink-0 rounded-full flex items-center justify-center border-2 ${
                      s.status === "complete"
                        ? "bg-success-soft border-success text-success"
                        : s.status === "in-progress"
                        ? "bg-warning-soft border-warning text-warning"
                        : "bg-card border-border text-muted-foreground"
                    }`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 pt-1 pb-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-semibold">{s.title}</h3>
                        <div className={`border-0 ${meta.badge}`}>
                          {/* <meta.Icon className="h-3 w-3 mr-1" /> {meta.label} */}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.date}</p>
                      {s.status === "in-progress" && (
                        <CustomButton>
                            Continue Step
                        </CustomButton>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
