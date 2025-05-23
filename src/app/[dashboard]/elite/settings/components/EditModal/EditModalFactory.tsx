import { RoleEditModal } from "./RoleEditModal";
import { PlatformFeeEditModal } from "./PlatformFeeEditModal";
import { PerkBenefitEditModal } from "./PerkBenefitEditModal";
import { VerificationPlanEditModal } from "./VerificationPlanEditModal";
import { RegionEditModal } from "../RegionEditModal";
import { BaseEditProps } from "../../types";

// Define the exact string literal types for modal types
export type ModalType =
  | "Regions"
  | "Roles"
  | "Platform Fee"
  | "Perks and Benefits"
  | "Verification Plans";

interface EditModalFactoryProps extends BaseEditProps {
  type: ModalType;
}

export const EditModalFactory: React.FC<EditModalFactoryProps> = ({
  type,
  ...props
}) => {
  // Map the tab names to their corresponding components
  const modalComponents = {
    Regions: RegionEditModal,
    Roles: RoleEditModal,
    "Platform Fee": PlatformFeeEditModal,
    "Perks and Benefits": PerkBenefitEditModal,
    "Verification Plans": VerificationPlanEditModal,
  } as const;

  const ModalComponent = modalComponents[type];

  if (!ModalComponent) {
    console.error(`No modal component found for type: ${type}`);
    return null;
  }

  return <ModalComponent {...props} />;
};
