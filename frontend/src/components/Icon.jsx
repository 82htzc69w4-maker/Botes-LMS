import {
  LayoutDashboard, Users, ShieldCheck, Building2, MapPin, BriefcaseBusiness,
  Network, Workflow, ScrollText, Settings, Bell, Search, Menu, ChevronDown,
  UserPlus, ShieldPlus, Building, ArrowUpRight, MoreHorizontal, SlidersHorizontal,
  Download, Plus, Pencil, Trash2, Eye, LockKeyhole, CircleCheck, AlertTriangle,
  LogIn, X, Check, Clock3, Activity, Database, KeyRound, Globe2
} from "lucide-react";

const icons = {
  dashboard: LayoutDashboard, users: Users, roles: ShieldCheck, departments: Building2,
  sites: MapPin, positions: BriefcaseBusiness, organization: Network, workflows: Workflow,
  audit: ScrollText, settings: Settings, bell: Bell, search: Search, menu: Menu,
  down: ChevronDown, userPlus: UserPlus, shieldPlus: ShieldPlus, building: Building,
  arrow: ArrowUpRight, more: MoreHorizontal, filter: SlidersHorizontal, download: Download,
  plus: Plus, edit: Pencil, trash: Trash2, eye: Eye, lock: LockKeyhole, checkCircle: CircleCheck,
  alert: AlertTriangle, login: LogIn, close: X, check: Check, clock: Clock3,
  activity: Activity, database: Database, key: KeyRound, globe: Globe2, shield: ShieldCheck,
  user: UserPlus,
};

export default function Icon({ name, size = 20, strokeWidth = 2, ...props }) {
  const Component = icons[name] || Activity;
  return <Component size={size} strokeWidth={strokeWidth} {...props} />;
}
