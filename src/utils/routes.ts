import {
  Welcome,
  Gender,
  Birthday,
  PalmsHold,
  Wish,
  ResonatedElement,
  ColorYouLike,
  Decisions,
  GuidancePlan,
  ScanInfo,
  Upload,
  Email,
  ScanPhoto,
  SubscriptionPlan,
  Paywall, RelationshipStatus,
} from "./constants";
import WelcomePage from "../Pages/welcomePage/WelcomePage";
import GenderPage from "../Pages/genderPage/GenderPage";
import BirthdayPage from "../Pages/birthdayPage/BirthdayPage";
import PalmsHoldPage from "../Pages/PalmsHold/PalmsHoldPage";
import WishPage from "../Pages/Wish/WishPage";
import RelationshipStatusPage from "../Pages/RelationshipStatus/RelationshipStatusPage";
import ResonatedElementPage from "../Pages/ResonatedElement/ResonatedElementPage";
import ColorYouLikePage from "../Pages/ColorYouLikePage/ColorYouLikePage";
import DecisionsPage from "../Pages/Decisions/DecisionsPage";
import GuidancePlanPage from "../Pages/GuidancePlan/GuidancePlanPage";
import ScanInfoPage from "../Pages/ScanInfoPage/ScanInfoPage";
import UploadPage from "../Pages/Upload/UploadPage";

export const publicRoutes = [
  {
    path: Welcome,
    Component: WelcomePage
  },
  {
    path: Gender,
    Component: GenderPage
  },
  {
    path: Birthday,
    Component: BirthdayPage
  },
  {
    path: PalmsHold,
    Component: PalmsHoldPage
  },
  {
    path: Wish,
    Component: WishPage
  },
  {
    path: RelationshipStatus,
    Component: RelationshipStatusPage
  },
  {
    path: ResonatedElement,
    Component: ResonatedElementPage
  },
  {
    path: ColorYouLike,
    Component: ColorYouLikePage
  },
  {
    path: Decisions,
    Component: DecisionsPage
  },
  {
    path: GuidancePlan,
    Component: GuidancePlanPage
  },
  {
    path: ScanInfo,
    Component: ScanInfoPage
  },
  {
    path: Upload,
    Component: UploadPage
  },
  {
    path: Email,
    Component: WelcomePage
  },
  {
    path: ScanPhoto,
    Component: WelcomePage
  },
  {
    path: SubscriptionPlan,
    Component: WelcomePage
  },
  {
    path: Paywall,
    Component: WelcomePage
  },
];
