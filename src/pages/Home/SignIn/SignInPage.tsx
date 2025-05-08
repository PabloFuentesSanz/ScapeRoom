import { SignIn } from "@clerk/clerk-react";
import "./SignInPage.css";
import { ROUTES } from '../../../routes/routes';

const SignInPage = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  if (!show) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <SignIn
          routing="hash"
          appearance={{
            variables: {
              colorPrimary: "#abffe7",
              colorText: "#abffe7",
              colorBackground: "transparent",
              borderRadius: "0.2",
            },

            elements: {
              footer: { background: "transparent" },
              socialButtonsBlockButton: { color: "#abffe7", outline: "1px solid #abffe7" },
              socialButtonsBlockButtonHover: { color: "red", outline: "1px solid #abffe7" },
              cardBox: { boxShadow: "0 0 0 0", background: "transparent" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
