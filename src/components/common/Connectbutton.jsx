import { createThirdwebClient } from "thirdweb";
import { ConnectButton, useConnect } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { inAppWallet,createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "bf16131691c0932e2227bbd5a9119030",
});


const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email", "passkey"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("com.binance"),
];

const ConnectButtons = ({ onConnectionChange }) => {
  const { isConnected, address } = useConnect(); // Track wallet connection state

  // Notify parent (Navbar) of connection state changes
  if (onConnectionChange) {
    onConnectionChange(isConnected);
  }

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={darkTheme({
        colors: {
          primaryText: "#F6F8FF",
          secondaryText: "#2B333D",
          accentText: "#F6F8FF",
          modalOverlayBg: "#DAE8FC",
          modalBg: "#010101",
          accentButtonBg: "#2469DA",
          accentButtonText: "#F6F8FF",
          secondaryButtonBg: "#010101",
          secondaryButtonText: "#F6F8FF",
          secondaryButtonHoverBg: "#2469DA",
          separatorLine: "#2B333D",
          borderColor: "#2B333D",
          primaryButtonBg: "#2469DA",
          primaryButtonText: "#F6F8FF",
          connectedButtonBg: "#010101",
          connectedButtonBgHover: "#2469DA",
        },
        style: {
          borderRadius: "5px",
        },
        fontFamily: "Arial Black",
      })}
      connectModal={{ size: "compact" }}
    />
  );
};

export default ConnectButtons;
